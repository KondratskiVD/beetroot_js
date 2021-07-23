let a, b;
document.write("<table border=\"1\" cellspacing=\"0\" cellpadding=\"2\"align =\"center\">")
for (a = 2; a <= 10; a++) {
    document.write("<tr>");
    for (b = 2; b < 10; b++) { document.write("<td>" + b + "&times;" + a + "=" + (a * b) + "</td>") }
    document.write("</tr>")
}
document.write("</table>")