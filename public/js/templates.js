var templates = {};
templates.main = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=''></div>");return _.fl();;});
templates.todoAddModal = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div data-id=\"");_.b(_.v(_.f("id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("    <h3>Todo Item</h3>");_.b("\n" + i);_.b("    <input type=\"text\" id=\"todoName\"value=\"");_.b(_.v(_.f("name",c,p,0)));_.b("\">");_.b("\n" + i);_.b("    <input type=\"text\" id=\"todoDescription\" value=\"");_.b(_.v(_.f("description",c,p,0)));_.b("\">");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"modal hide fade\">");_.b("\n" + i);_.b("    <div class=\"modal-header\">");_.b("\n" + i);_.b("        <button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <div class=\"modal-body container row\">");_.b("\n" + i);_.b("        <div class=\"row\">");_.b("\n" + i);_.b("            <div class=\"span2\">Name</div>");_.b("\n" + i);_.b("            <input class=\"span2\" value=\"");_.b(_.v(_.f("name",c,p,0)));_.b("\">");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <div class=\"row\">");_.b("\n" + i);_.b("            <div class=\"span2\">Description</div>");_.b("\n" + i);_.b("            <input class=\"span2\" value=\"");_.b(_.v(_.f("description",c,p,0)));_.b("\">");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <div class=\"modal-footer\"></div>");_.b("\n" + i);_.b("</div>");return _.fl();;});
