import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://rojas-ya.vercel.app",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Credentials": "true"
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validar los campos requeridos
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,   
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configurar el correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "romulocalle42@gmail.com",
      subject: `Nuevo mensaje de contacto: ${subject}`,
      // attachments: [
      //   {
      //     filename: 'rojaslogo.png',
      //     path: './public/images/rojaslogosfon.png', // Local path to your image
      //     cid: 'rojasya' // Content ID
      //   }
      // ],
      html: `
        <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mensaje de Contacto - Rojas Ya</title>
  <style>
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 650px;
      margin: 0 auto;
      background: linear-gradient(135deg, #f5f5f5 0%, #ffe5e9 100%);
      padding: 0;
    }
    .container {
      background: #fff;
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 6px 24px rgba(211,26,44,0.10), 0 1.5px 6px rgba(0,0,0,0.04);
      margin: 32px 0;
      border: 1.5px solid #f3cfd3;
    }
    .header {
      background: linear-gradient(90deg, #d31a2c 60%, #ff6f61 100%);
      color: white;
      padding: 32px 20px 18px 20px;
      text-align: center;
      border-bottom: 3px solid #fff0f3;
    }
    .header h2 {
      margin: 0;
      font-weight: 700;
      font-size: 28px;
      letter-spacing: 0.5px;
      text-shadow: 0 2px 8px #b01522cc;
      font-family: 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
    .logo {
      max-width: 300px;
      margin-bottom: 12px;
      border-radius: 10px;
      box-shadow: 0 2px 8px #b0152233;
    }
    .content {
      padding: 36px 32px 24px 32px;
      background: #fff;
    }
    .info-row {
      margin-bottom: 18px;
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }
    .info-label {
      font-weight: bold;
      min-width: 90px;
      color: #d31a2c;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .info-label svg {
      width: 18px;
      height: 18px;
      vertical-align: middle;
      margin-right: 2px;
    }
    .info-value {
      flex: 1;
      color: #444;
    }
    .message-highlight {
      background: linear-gradient(90deg, #ffe5e9 0%, #fff 100%);
      padding: 22px 18px;
      border-radius: 10px;
      margin-top: 18px;
      border-left: 5px solid #d31a2c;
      font-size: 1.08em;
      color: #b01522;
      box-shadow: 0 2px 8px #d31a2c11;
    }
    .quick-actions {
      margin: 24px 0 0 0;
      text-align: center;
    }
    .quick-btn {
      display: inline-block;
      background: linear-gradient(90deg, #d31a2c 60%, #ff6f61 100%);
      color: #fff !important;
      font-weight: 600;
      border: none;
      border-radius: 6px;
      padding: 12px 28px;
      margin: 0 8px;
      font-size: 15px;
      text-decoration: none;
      box-shadow: 0 2px 8px #d31a2c22;
      transition: background 0.2s, box-shadow 0.2s;
    }
    .quick-btn:hover {
      background: #b01522;
      box-shadow: 0 4px 16px #d31a2c33;
    }
    .footer {
      text-align: center;
      padding: 22px 18px 18px 18px;
      font-size: 13px;
      color: #777;
      background: #fff0f3;
      border-top: 1.5px solid #f3cfd3;
    }
    .social-links {
      margin: 18px 0 10px 0;
    }
    .social-icon {
      display: inline-block;
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, #d31a2c 60%, #ff6f61 100%);
      border-radius: 50%;
      margin: 0 6px;
      text-align: center;
      line-height: 36px;
      box-shadow: 0 2px 8px #d31a2c22;
    }
    .social-icon img {
      vertical-align: middle;
      width: 18px;
      height: 18px;
      filter: brightness(0) invert(1);
    }
    @media only screen and (max-width: 480px) {
      .container { margin: 10px; }
      .content { padding: 18px 6px; }
      .info-row { flex-direction: column; gap: 2px; }
      .info-label { margin-bottom: 2px; }
      .message-highlight { padding: 14px 6px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://rojas-ya.vercel.app/images/rojaslogosfon.png" alt="Rojas Ya" class="logo">
      <h2>Nuevo Mensaje de Contacto</h2>
    </div>
    <div class="content">
      <div class="info-row">
        <div class="info-label">
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" width="18" height="18" alt="icono nombre" />&nbsp; Nombre:
        </div>
        <div class="info-value">${name}</div>
      </div>
      <div class="info-row">
        <div class="info-label">
          <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" width="18" height="18" alt="icono email" />&nbsp; Email:
        </div>
        <div class="info-value">${email}</div>
      </div>
      <div class="info-row">
        <div class="info-label">
          <img src="https://cdn-icons-png.flaticon.com/512/3596/3596199.png" width="18" height="18" alt="icono asunto" />&nbsp; Asunto:
        </div>
        <div class="info-value">${subject}</div>
      </div>
      <div class="info-row">
        <div class="info-label">
          <img src="https://cdn-icons-png.flaticon.com/512/747/747310.png" width="18" height="18" alt="icono fecha" />&nbsp; Fecha:
        </div>
        <div class="info-value">${new Date().toLocaleString("es-ES", {year: "numeric",month: "long",day: "numeric",hour: "2-digit",minute: "2-digit",})}</div>
      </div>
      <div class="info-row">
        <div class="info-label">
          <img src="https://cdn-icons-png.flaticon.com/512/1250/1250615.png" width="18" height="18" alt="icono mensaje" />&nbsp; Mensaje:
        </div>
      </div>
      <div class="message-highlight">
        ${message.replace(/\n/g, "<br>")}
      </div>
      <div class="quick-actions">
        <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(subject)}" class="quick-btn">Responder</a>
        <a href="https://wa.me/?text=Hola%20${encodeURIComponent(name)}!%20Gracias%20por%20contactar%20a%20Rojas%20Ya." class="quick-btn" target="_blank">Responder por WhatsApp</a>
      </div>
    </div>
    <div class="footer">
      <p>Este mensaje fue enviado desde el formulario de contacto de Rojas Ya</p>
      <div class="social-links">
        <a href="https://www.facebook.com/RojasMasNasca" class="social-icon" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook"></a>
        <a href="https://www.instagram.com/rojasmassnazca/" class="social-icon" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram"></a>
        <a href="https://x.com/home" class="social-icon" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter"></a>
      </div>
      <p>© ${new Date().getFullYear()} Rojas Ya - Todos los derechos reservados</p>
      <p>Av. Principal 123, Lima, Perú | +51 123 456 789</p>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Mensaje enviado correctamente" },
      { status: 200,
        headers: {
          "Access-Control-Allow-Origin": "https://rojas-ya.vercel.app",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Credentials": "true"
        }
      }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500,
        headers: {
          "Access-Control-Allow-Origin": "https://rojas-ya.vercel.app",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Credentials": "true"
        }
      }
    );
  }
}
