DSFTemplates = 
{
    "markdownFile" : "<div{{#id}} id='{{id}}'{{/id}}></h1>",
    "layouts": {
        "Max-width" : "<div style='color:red'>This is just for demonstration purposes. It is not a real service.</div><article class='row' id='main'><form id='components' class='govcy-form'></form></article>"
        ,"One-third + Two-thirds + Sidemenu" : "<div style='color:red'>This is just for demonstration purposes. It is not a real service.</div><div class='row'><article class='col-md-9 order-md-last' id='main'></article>"
            +"<aside class='col-md-3 order-md-first'><nav class='nav flex-column' id='sideMenu'></nav></aside></div>"
    },
    "header" : {
        "en": 
            "<div class='row'>"
            + "<header class='govcy-header govcy-bg-primary govcy-text-white govcy-bg-primary-right'>"
            + "<a href='#' class='govcy-logo'> <img/></a>"
            + "<form class='govcy-text-white govcy-bg-primary'>     "
            + "<select id='changeLangSel' name='govcy-lang-menu' class='govcy-lang-menu govcy-text-white'>"
            + "<option value='en' selected>En</option>"
            + "<option value='el'>El</option>"
            + "</select>"
            + "</form>"
            + "<input class='govcy-menu-btn govcy-d-none' type='checkbox' id='menu-btn' />"
            + "<label class='govcy-menu-icon govcy-d-md-none' for='menu-btn'>Menu"
            + "<span class='material-icons govcy-my-3'>arrow_drop_down</span>"
            + "</label>"
            + "<span class='govcy-service-name'>Prototypes</span>"
            + "<ul class='govcy-menu govcy-bg-sub-menu govcy-bg-md-primary'>"
            + "<li><a href='#'>Help</a></li>"
            + "<li><a href='#'>Login</a></li>"
            + "</ul>"
            + "</header>"
            + "</div>"
        ,"el" : 
            "<div class='row'>"
            + "<header class='govcy-header govcy-bg-primary govcy-text-white govcy-bg-primary-right'>"
            + "<a href='#' class='govcy-logo'> <img/></a>"
            + "<form class='govcy-text-white govcy-bg-primary'>     "
            + "<select id='changeLangSel' name='govcy-lang-menu' class='govcy-lang-menu govcy-text-white'>"
            + "<option value='en'>En</option>"
            + "<option value='el' selected>El</option>"
            + "</select>"
            + "</form>"
            + "<input class='govcy-menu-btn govcy-d-none' type='checkbox' id='menu-btn' />"
            + "<label class='govcy-menu-icon govcy-d-md-none' for='menu-btn'>Menu"
            + "<span class='material-icons govcy-my-3'>arrow_drop_down</span>"
            + "</label>"
            + "<span class='govcy-service-name'>Πρωτότυπα</span>"
            + "<ul class='govcy-menu govcy-bg-sub-menu govcy-bg-md-primary'>"
            + "<li><a href='#'>Βοήθεια</a></li>"
            + "<li><a href='#'>Σύνδεση</a></li>"
            + "</ul>"
            + "</header>"
            + "</div>"
    },
    "footer" : {
        "en" : 
            " <div class='row'>"
            + "<footer class='govcy-footer'>"
            + "<span class='govcy-d-inline-block govcy-valign-top govcy-pb-2'><img alt='govcy-logo' /></span>"
            + "<ul class='govcy-d-inline-block  govcy-m-0 govcy-pl-3 govcy-efs-medium'>"
            + "<li><a href='#'>Privacy statement</a></li>"
            + "<li><a href='#'>Cookie policy</a></li>"
            + "<li><a href='#'>Accessibility statement</a></li>"
            + "<li class='govcy-d-block govcy-text-dark'>© Republic of Cyprus, 2021</li>"
            + "</ul>"
            + "</footer>"
            + "</div>"
        ,"el" : 
            " <div class='row'>"
            + "<footer class='govcy-footer'>"
            + "<span class='govcy-d-inline-block govcy-valign-top govcy-pb-2'><img alt='govcy-logo' /></span>"
            + "<ul class='govcy-d-inline-block  govcy-m-0 govcy-pl-3 govcy-efs-medium'>"
            + "<li><a href='#'>Όροι Χρήσης</a></li>"
            + "<li><a href='#'>Προστασία Προσωπικών Δεδομένων</a></li>"
            + "<li><a href='#'>Προσβασιμότητα</a></li>"
            + "<li class='govcy-d-block govcy-text-dark'>© Κυπριακή Δημοκρατία, 2021</li>"
            + "</ul>"
            + "</footer>"
            + "</div>"
    },
    "componentTemplates" : {
        "text": 
         "<div class='govcy-form-control {{#classes}} {{.}}{{/classes}}'>"
        + "<label{{#id}} for='{{id}}'{{/id}} class='govcy-label' for='input'>{{{langLabel}}}</label>"
        + "{{#hint}}<span class='govcy-hint'>{{hint}}</span>{{/hint}}"
        + "<input type='text' class='govcy-text-input' name='{{name}}'"
        +"{{#id}}id='{{id}}'{{/id}}"
        +"{{#placeholder}}placeholder='{{placeholder}}'{{/placeholder}}"
        +"{{#maxlength}} maxlength={{maxlength}}{{/maxlength}}>"
        + "</div>",
        //"<div class='govcy-form govcy-mb-3{{#classes}} {{.}}{{/classes}}'>"
            // + "<label{{#id}} for='{{id}}'{{/id}} class='govcy-label'>{{langLabel}}</label>"
            // + "{{#hint}}<span class='govcy-hint'>{{hint}}</span>{{/hint}}"
            // + "<input type='text' class='govcy-text-input' name='{{name}}'"
            //     +"{{#id}}id='{{id}}'{{/id}}"
            //     +"{{#placeholder}}placeholder='{{placeholder}}'{{/placeholder}}"
            //     +"{{#maxlength}} maxlength={{maxlength}}{{/maxlength}}></div>",
        "button" : "<button type='button' class='govcy-btn-{{subtype}}{{#classes}} {{.}}{{/classes}}'{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</button>",
        "link" : "<a class='{{#classes}} {{.}}{{/classes}}' href='{{href}}'{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</a>",
        "backLink" : "<div class='govcy-mb-3{{#classes}} {{.}}{{/classes}}'>< <a href='javascript:history.back()'{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</a></div>",
        "paragraph" : "<p class='{{#classes}} {{.}}{{/classes}}'{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</p>", 
        "spanHTML" : "<span class='{{#classes}} {{.}}{{/classes}}'{{#id}} id='{{id}}'{{/id}}>{{{langLabel}}}</span>", 
        "paragraphHTML" : "<div class='{{#classes}} {{.}}{{/classes}}'{{#id}} id='{{id}}'{{/id}}>{{{langLabel}}}</div>", 
        "h1" : "<h1 class='{{#classes}} {{.}}{{/classes}}'{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h1>",
        "h2" : "<h2 class='{{#classes}} {{.}}{{/classes}}'{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h2>",
        "h3" : "<h3 class='{{#classes}} {{.}}{{/classes}}'{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h3>",
        "h4" : "<h4 class='{{#classes}} {{.}}{{/classes}}'{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h4>",
        "h5" : "<h5 class='{{#classes}} {{.}}{{/classes}}'{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h5>",
        "h6" : "<h6 class='{{#classes}} {{.}}{{/classes}}'{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h6>",
        "table" : "<p>{{langLabel}}</p>"
        + "<table class='table{{#classes}} {{.}}{{/classes}}'>"
        + "<thead><tr>"
            + "{{#head}}<th>{{.}}</th>{{/head}}"
        + "</tr></thead>"
        + "<tbody>"
            + "{{#data}}<tr>{{#.}}<td>{{{.}}}</td>{{/.}}</tr>{{/data}}"
        + "</tbody>"
        + "</table>"
        ,"checkboxes" : 
            "<fieldset {{#id}} id='{{id}}'{{/id}}class='govcy-fieldset'>"
            + "<legend class='govcy-legend'>{{{langLabel}}}</legend>"
            + "{{#hint}}<span class='govcy-hint'>{{{hint}}}</span>{{/hint}}"
            + "<div class='govcy-form-control'>"
            + "{{#data}}"
                + "<label class='govcy-checkbox'>"
                + "{{{option_label}}}"
                + "<input name='{{name}}' value='{{option_value}}' id='{{option_id}}'{{#option_checked}}checked{{/option_checked}} class='govcy-checkbox-input' type='checkbox'>"
                + "<span class='govcy-tickbox'></span>"
                + "{{#option_hint}}<span class='govcy-hint govcy-mt-2'>{{{option_hint}}}</span>{{/option_hint}}"
                + "</label>"
            + "{{/data}}"
            + "</div>"
            + "</fieldset>"
        ,"file" : "<div class='govcy-mb-3 {{#classes}} {{.}}{{/classes}}'>"
            + "<label{{#id}} for='{{id}}'{{/id}}class='form-label'>{{langLabel}}</label>"
            + "<input class='form-control' type='file' name='{{name}}' {{#id}}id='{{id}}'{{/id}}>"
            + "</div>"            
        ,"radio" : 
            "<fieldset {{#id}} id='{{id}}'{{/id}}class='govcy-fieldset'>"
            + "<legend class='govcy-legend'>{{{langLabel}}}</legend>"
            + "{{#hint}}<span class='govcy-hint govcy-mt-2'>{{{hint}}}</span>{{/hint}}"
            + "<div class='govcy-form-control'>"
            + "{{#data}}"
                + "<label class='govcy-radio-btn'>"
                + "{{{option_label}}}"
                + "<input name='{{name}}' value='{{option_value}}' id='{{option_id}}'{{#option_checked}}checked{{/option_checked}} class='govcy-radio-input' type='radio'>"
                + "<span class='govcy-radio'></span>"
                + "{{#option_hint}}<span class='govcy-hint govcy-mt-2'>{{{option_hint}}}</span>{{/option_hint}}"
                + "</label>"
            + "{{/data}}"
            + "</div>"
            + "</fieldset>"
        ,"successPanel" : 
            "<div class='row govcy-px-2{{#classes}} {{.}}{{/classes}}'>"
                + "<div class='govcy-alert-completed-notification govcy-px-0'>"
                    + "<div class='govcy-alert-completed-notification-body govcy-bg-success'>"
                        + "<h1>{{head}}</h1>"
                        + "<p class='govcy-mb-0'>{{{langLabel}}}</p>"
                    + "</div>"
                + "</div>"
            + "</div>"
        ,"alertError" : 
            "<div class='row govcy-px-2{{#classes}} {{.}}{{/classes}}'>"
            + "<div class='govcy-alert-error govcy-br-5 govcy-br-danger govcy-p-3'>"
            + "<h2>{{{langLabel}}}</h2>"
            + "<p class='govcy-mb-0'>{{#data}}<a href='#'>{{{.}}}</a>{{/data}}</p>"
            + "</div>"
            + "</div>"
        ,"alertImportant" : 
            "<div class='row govcy-px-2{{#classes}} {{.}}{{/classes}}'>"
            + "<div class='govcy-alert-notification govcy-br-5 govcy-br-info govcy-px-0'>"
                + "<div class='govcy-alert-notification-header govcy-bg-info'>{{{langLabel}}}</div>"
                + "<div class='govcy-alert-notification-body'>"
            + "{{#data}}<p class='govcy-pl-4 govcy-pt-3 govcy-fw-bold'>{{{.}}}</p>{{/data}}"
            + "</div>"
            + "</div>"
            + "</div>"
        ,"alertSuccess" : 
            "<div class='row govcy-px-2{{#classes}} {{.}}{{/classes}}'>"
            + "<div class='govcy-alert-notification govcy-br-5 govcy-br-success govcy-px-0'>"
                + "<div class='govcy-alert-notification-header govcy-bg-success'>{{{langLabel}}}</div>"
                + "<div class='govcy-alert-notification-body'>"
            + "{{#data}}<p class='govcy-pl-4 govcy-pt-3 govcy-fw-bold'>{{{.}}}</p>{{/data}}"
            + "</div>"
            + "</div>"
            + "</div>"
        ,"warning" :
            "<div class='row{{#classes}} {{.}}{{/classes}}'>"
            + "<div class='govcy-alert-warning'>"
            + "<span class='material-icons govcy-alert-warning-icon'>error</span>"
            + "<span class='govcy-alert-warning-text' >{{{langLabel}}}</span>"
            + "</div>"
            + "</div>"
        ,"fieldsetOpen" : "<fieldset class='govcy-fieldset{{#classes}} {{.}}{{/classes}}' {{#id}} id='{{id}}'{{/id}}>" 
            + "<legend class='govcy-legend'>{{{legend}}}</legend>"
        ,"fieldsetClose" : "</fieldset>"
        ,"divContainerOpen" : "<div class='govcy-container{{#classes}} {{.}}{{/classes}}' {{#id}} id='{{id}}'{{/id}}>"
        ,"divContainerFluidOpen" : "<div class='govcy-container-fluid{{#classes}} {{.}}{{/classes}}' {{#id}} id='{{id}}'{{/id}}>"
        ,"divRowOpen" : "<div class='row{{#classes}} {{.}}{{/classes}}' {{#id}} id='{{id}}'{{/id}}>"
        ,"divColumnOpen" : "<div class='govcy-col{{#colnum}}-{{colnum}}{{/colnum}}{{#classes}} {{.}}{{/classes}} '{{#id}} id='{{id}}'{{/id}}>"
        ,"divClose" : "</div>"
    } 
};