<?php
// Envio do formulário de contacto (alojamento com PHP, p.ex. o atual do WordPress).
// Alternativa sem PHP: trocar o action do formulário por um serviço como Formspree.
$destino = 'geral@funerariaalmeida.pt';

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !empty($_POST['website'])) { // honeypot anti-spam
  header('Location: /contactos/'); exit;
}
$limpa = fn($v) => trim(str_replace(["\r", "\n"], ' ', strip_tags($v ?? '')));
$nome = $limpa($_POST['nome']); $email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$tel = $limpa($_POST['telefone']); $assunto = $limpa($_POST['assunto']);
$msg = trim(strip_tags($_POST['mensagem'] ?? ''));

if (!$nome || !$email || !$tel || empty($_POST['consentimento'])) {
  header('Location: /contactos/?enviado=0#formulario'); exit;
}
$corpo = "Nome: $nome\nEmail: $email\nTelefone: $tel\nAssunto: $assunto\n\n$msg\n";
$headers = "From: site@funerariaalmeida.pt\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";
$ok = mail($destino, '=?UTF-8?B?' . base64_encode("Site — $assunto") . '?=', $corpo, $headers);
header('Location: /contactos/?enviado=' . ($ok ? '1' : '0') . '#formulario');
