DSFTemplates = 
{
    "markdownFile" : "<div{{#id}} id='{{id}}'{{/id}}></h1>",
    "layouts": {
        "Max-width" : "<div style='color:red'>This is just for demonstration purposes. It is not a real service.</div><article id='main'></article><form id='components'></form>"
        ,"One-third + Two-thirds + Sidemenu" : "<div style='color:red'>This is just for demonstration purposes. It is not a real service.</div><div class='row'><article class='col-md-9 order-md-last' id='main'></article>"
            +"<aside class='col-md-3 order-md-first'><nav class='nav flex-column' id='sideMenu'></nav></aside></div>"
    },
    "header" : {
        "en": "<div class='row'>"
        + "<header class='govcy-header'>"
        + "<a href='#' class='govcy-header-logo'> <img/></a>"
        + "<form>"
        + "<select id='changeLangSel' name='govcy-header-lang-menu' class='govcy-header-lang-menu'>"
        + "<option value='en' selected>EN</option>"
        + "<option value='el'>EL</option>"
        + "</select>"
        + "</form>"
        + "<input class='govcy-header-menu-btn' type='checkbox' id='menu-btn' />"
        + "<label class='govcy-header-menu-icon' for='menu-btn'>Menu<a><span class='material-icons carot-icon'>"
        + "arrow_drop_down"
        + "</span></a></label>"
        + "<label class='govcy-header-service-name'> <span>Prototypes</span></label>"
        + "<ul class='govcy-header-menu'>"
        + "<li><a href='#'>Guidance</a></li>"
        + "<li><a href='#'>Help</a></li>"
        + "<li><a href='#'>Login</a></li>"
        + "</ul>"
        + "</header>"
        + "</div>"
        ,"el" : "<div class='row'>"
        + "<header class='govcy-header'>"
        + "<a href='#' class='govcy-header-logo'> <img/></a>"
        + "<form>"
        + "<select id='changeLangSel' name='govcy-header-lang-menu' class='govcy-header-lang-menu'>"
        + "<option value='en'>EN</option>"
        + "<option value='el' selected>EL</option>"
        + "</select>"
        + "</form>"
        + "<input class='govcy-header-menu-btn' type='checkbox' id='menu-btn' />"
        + "<label class='govcy-header-menu-icon' for='menu-btn'>Μενού<a><span class='material-icons carot-icon'>"
        + "arrow_drop_down"
        + "</span></a></label>"
        + "<label class='govcy-header-service-name'> <span>Πρωτότυπα</span></label>"
        + "<ul class='govcy-header-menu'>"
        + "<li><a href='#'>Guidance</a></li>"
        + "<li><a href='#'>Βοήθεια</a></li>"
        + "<li><a href='#'>Σύνδεση</a></li>"
        + "</ul>"
        + "</header>"
        + "</div>"
    },
    "footer" : {
        "en" : "<footer class='py-3 my-4 bg-light border-top'>  <p class='justify-content-center mb-0 text-muted text-center'> <a class='text-muted' href='#'>Terms and Conditions</a>&nbsp;/&nbsp;      <a class='text-muted' href='#'>Accessibility</a>&nbsp;/&nbsp;      <a class='text-muted' href='#'>Data protection</a>  </p> <p class='justify-content-center mb-0 text-muted text-center'>     Built by the <a class='text-muted' href='#'>DSF Design System team</a>&nbsp;/&nbsp; </p>  <p class='justify-content-center mb-0 text-muted text-center'>     <img class='pe-3' src='img/thyreos.gif' alt='Cyprus Government'> © Republic of Cyprus, 2021 </p> </footer>"
        ,"el" : "<footer class='py-3 my-4 bg-light border-top'>  <p class='justify-content-center mb-0 text-muted text-center'> <a class='text-muted' href='#'> Όροι χρήσης</a>&nbsp;/&nbsp;      <a class='text-muted' href='#'>Προσβασιμότητα</a>&nbsp;/&nbsp;      <a class='text-muted' href='#'>Προστασία Προσωπικών Δεδομένων</a>  </p> <p class='justify-content-center mb-0 text-muted text-center'>     Ανάπτυξη <a class='text-muted' href='#'>DSF Design System team</a>&nbsp;/&nbsp; </p>  <p class='justify-content-center mb-0 text-muted text-center'>     <img class='pe-3' src='img/thyreos.gif' alt='Cyprus Government'> © Κυπριακή Δημοκρατία, 202 </p> </footer>"
    },
    "componentTemplates" : {
        "text": "<div class='mb-3'><label{{#id}} for='{{id}}'{{/id}} class='form-label'>{{langLabel}}</label>"
            +"<input type='text' class='form-control' name='{{name}}'"
                +"{{#id}}id='{{id}}'{{/id}}"
                +"{{#placeholder}}placeholder='{{placeholder}}'{{/placeholder}}"
                +"{{#maxlength}} maxlength={{maxlength}}{{/maxlength}}></div>",
        "button" : "<button type='button' class='govcy-btn-primary'{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</button>",
        "link" : "<a href='{{href}}'{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</a>",
        "backLink" : "<div class='md-3'>< <a href='javascript:history.back()'{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</a></div>",
        "paragraph" : "<p{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</p>", 
        "spanHTML" : "<span{{#id}} id='{{id}}'{{/id}}>{{{langLabel}}}</span>", 
        "paragraphHTML" : "<div{{#id}} id='{{id}}'{{/id}}>{{{langLabel}}}</div>", 
        "h1" : "<h1{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h1>",
        "h2" : "<h2{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h2>",
        "h3" : "<h3{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h3>",
        "h4" : "<h4{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h4>",
        "h5" : "<h5{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h5>",
        "h6" : "<h6{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h6>",
        "footer" : "<p{{#id}} id='{{id}}'{{/id}}>FOOTER: {{langLabel}}</p>",
        "table" : "<p>{{langLabel}}</p>"
        + "<table class='table'>"
        + "<thead><tr>"
            + "{{#head}}<th>{{.}}</th>{{/head}}"
        + "</tr></thead>"
        + "<tbody>"
            + "{{#data}}<tr>{{#.}}<td>{{{.}}}</td>{{/.}}</tr>{{/data}}"
        + "</tbody>"
        + "</table>"
        ,"checkboxes" : "<p{{#id}} id='{{id}}'{{/id}}>{{{langLabel}}}</p>"
            + "{{#data}}"
            + "<div class='form-check'>"
            + "<input name='{{name}}' class='form-check-input' type='checkbox' value='{{option_value}}' id='{{option_id}}'{{#option_checked}}checked{{/option_checked}}>"
            + "<label class='form-check-label' for='{{option_id}}'>{{option_label}}</label>"
            + "</div>{{/data}}"
        ,"file" : "<div class='mb-3'>"
            + "<label{{#id}} for='{{id}}'{{/id}}class='form-label'>{{langLabel}}</label>"
            + "<input class='form-control' type='file' name='{{name}}' {{#id}}id='{{id}}'{{/id}}>"
            + "</div>"            
        ,"radio" : "<p{{#id}} id='{{id}}'{{/id}}>{{{langLabel}}}</p>"
            + "{{#data}}"
            + "<div class='form-check'>"
            + "<input name='{{name}}' class='form-check-input' type='radio' value='{{option_value}}' id='{{option_id}}'{{#option_checked}}checked{{/option_checked}}>"
            + "<label class='form-check-label' for='{{option_id}}'>{{option_label}}</label>"
            + "</div>{{/data}}"
        ,"successPanel" : "<div class='row'>"
            +"<div class='govcy-panel'>"
            +"<div class='col'>"
            +"<div class='row'>"
            +"<div class='col align-items-center justify-content-center d-flex'>"
            +"<h1>{{head}}</h1>"
            +"</div></div>"
            +"<div class='row'>"
            +"<div class='col align-items-center align-content-center justify-content-center d-flex'>"
            +"<p> {{{langLabel}}} </p>"
            +"</div></div></div></div></div>"
        ,"alertError" : "<div class='row'>"
            + "<div class='govcy-alert-error'>"
            + "<h2>"
            + "{{{langLabel}}}"
            + "</h2>"
            + "{{#data}}<p><a href='#'>{{{.}}}</a></p>{{/data}}"
            + "</div>"
            + "</div>"
    } 
};