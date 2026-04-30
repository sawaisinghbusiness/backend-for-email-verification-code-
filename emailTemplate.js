export function getVerifyEmailTemplate(otp) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify Your Email – GETXH</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:460px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">

          <!-- Top accent bar -->
          <tr>
            <td style="background:linear-gradient(90deg,#2196f3,#00bcd4);height:4px;font-size:0;">&nbsp;</td>
          </tr>

          <!-- Logo + heading -->
          <tr>
            <td align="center" style="padding:28px 32px 20px;">
              <p style="margin:0 0 14px 0;font-size:22px;font-weight:900;letter-spacing:1px;color:#0f172a;">GET<span style="color:#2196f3;">X</span>H<span style="font-size:13px;color:#94a3b8;font-weight:600;">.in</span></p>
              <p style="margin:0;font-size:20px;font-weight:700;color:#1e293b;">Verify Your Email</p>
              <p style="margin:6px 0 0 0;font-size:13px;color:#64748b;">Enter this code on the verification page to complete signup.</p>
            </td>
          </tr>

          <!-- OTP Box -->
          <tr>
            <td align="center" style="padding:0 32px 24px;">
              <table cellpadding="0" cellspacing="0" border="0" style="background:#f0f9ff;border:1.5px solid #bae6fd;border-radius:12px;width:100%;">
                <tr>
                  <td align="center" style="padding:20px 24px;">
                    <p style="margin:0 0 6px 0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#0284c7;">Your Verification Code</p>
                    <p style="margin:0;font-size:38px;font-weight:800;letter-spacing:8px;color:#0f172a;font-family:'Courier New',monospace;">${otp}</p>
                    <p style="margin:8px 0 0 0;font-size:12px;color:#94a3b8;">Expires in <strong style="color:#2196f3;">5 minutes</strong></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Warning -->
          <tr>
            <td style="padding:0 32px 24px;">
              <p style="margin:0;font-size:12.5px;color:#64748b;line-height:1.6;text-align:center;">Do not share this code with anyone. If you did not request this, ignore this email.</p>
            </td>
          </tr>

          <!-- Divider + Footer -->
          <tr>
            <td style="padding:0 32px;">
              <div style="border-top:1px solid #e2e8f0;"></div>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:16px 32px 24px;">
              <p style="margin:0;font-size:11.5px;color:#94a3b8;">&copy; 2026 GETXH. All rights reserved.</p>
              <p style="margin:4px 0 0 0;font-size:11.5px;color:#94a3b8;">Need help? <a href="mailto:support@getxh.in" style="color:#2196f3;text-decoration:none;">support@getxh.in</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

export function getResetPasswordTemplate(otp) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reset Your Password – GETXH</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:460px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">

          <!-- Top accent bar -->
          <tr>
            <td style="background:linear-gradient(90deg,#ef4444,#f97316);height:4px;font-size:0;">&nbsp;</td>
          </tr>

          <!-- Logo + heading -->
          <tr>
            <td align="center" style="padding:28px 32px 20px;">
              <p style="margin:0 0 14px 0;font-size:22px;font-weight:900;letter-spacing:1px;color:#0f172a;">GET<span style="color:#2196f3;">X</span>H<span style="font-size:13px;color:#94a3b8;font-weight:600;">.in</span></p>
              <p style="margin:0;font-size:20px;font-weight:700;color:#1e293b;">Reset Your Password</p>
              <p style="margin:6px 0 0 0;font-size:13px;color:#64748b;">Use this code on the password reset page to set a new password.</p>
            </td>
          </tr>

          <!-- OTP Box -->
          <tr>
            <td align="center" style="padding:0 32px 24px;">
              <table cellpadding="0" cellspacing="0" border="0" style="background:#fff1f2;border:1.5px solid #fecdd3;border-radius:12px;width:100%;">
                <tr>
                  <td align="center" style="padding:20px 24px;">
                    <p style="margin:0 0 6px 0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#dc2626;">Your Reset Code</p>
                    <p style="margin:0;font-size:38px;font-weight:800;letter-spacing:8px;color:#0f172a;font-family:'Courier New',monospace;">${otp}</p>
                    <p style="margin:8px 0 0 0;font-size:12px;color:#94a3b8;">Expires in <strong style="color:#ef4444;">5 minutes</strong></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Warning -->
          <tr>
            <td style="padding:0 32px 24px;">
              <p style="margin:0;font-size:12.5px;color:#64748b;line-height:1.6;text-align:center;">Do not share this code with anyone. If you did not request a password reset, ignore this email. Your account is safe.</p>
            </td>
          </tr>

          <!-- Divider + Footer -->
          <tr>
            <td style="padding:0 32px;">
              <div style="border-top:1px solid #e2e8f0;"></div>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:16px 32px 24px;">
              <p style="margin:0;font-size:11.5px;color:#94a3b8;">&copy; 2026 GETXH. All rights reserved.</p>
              <p style="margin:4px 0 0 0;font-size:11.5px;color:#94a3b8;">Need help? <a href="mailto:support@getxh.in" style="color:#2196f3;text-decoration:none;">support@getxh.in</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}
