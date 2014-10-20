// JavaScript Document
function aclick(id)
{
	switch(id)
	{
		
	case "licolor":
		document.getElementById('lidesign').className = "design animated bounceInLeft";	    
		document.getElementById('licolor').className= "color animated bounceInLeft active";
		document.getElementById('licustomise').className = "customise animated bounceInLeft";
		document.getElementById('lipreview').className = "priview animated bounceInLeft";
		document.getElementById('lishare').className = "share animated bounceInLeft";
		//document.getElementById('designfront').style.display="none";
		//document.getElementById('designback').style.display="none";
		document.getElementById('colorpal').style.display="block";
		document.getElementById('divcustom').style.display="none";
		break;
		
	case "licustomise":
		document.getElementById('lidesign').className = "design animated bounceInLeft";	    
		document.getElementById('licolor').className= "color animated bounceInLeft";
		document.getElementById('licustomise').className = "customise animated bounceInLeft active";
		document.getElementById('lipreview').className = "priview animated bounceInLeft";
		document.getElementById('lishare').className = "share animated bounceInLeft";
		document.getElementById('colorpal').style.display="none";
		document.getElementById('divcustom').style.display="block";
		
		break;
		
	case "lipreview":
		document.getElementById('lidesign').className = "design animated bounceInLeft";	    
		document.getElementById('licolor').className= "color animated bounceInLeft";
		document.getElementById('licustomise').className = "customise animated bounceInLeft";
		document.getElementById('lipreview').className = "priview animated bounceInLeft active";
		document.getElementById('lishare').className = "share animated bounceInLeft";
		document.getElementById('colorpal').style.display="none";
		document.getElementById('divcustom').style.display="none";
		break;
		
	case "lishare":
		document.getElementById('lidesign').className = "design animated bounceInLeft";	    
		document.getElementById('licolor').className= "color animated bounceInLeft";
		document.getElementById('licustomise').className = "customise animated bounceInLeft";
		document.getElementById('lipreview').className = "priview animated bounceInLeft";
		document.getElementById('lishare').className = "share animated bounceInLeft active";
		document.getElementById('colorpal').style.display="none";
		document.getElementById('divcustom').style.display="none";
		break;
 default:
 
	   document.getElementById('lidesign').className = "design animated bounceInLeft active";	    
		document.getElementById('licolor').className= "color animated bounceInLeft";
		document.getElementById('licustomise').className = "customise animated bounceInLeft";
		document.getElementById('lipreview').className = "priview animated bounceInLeft";
		document.getElementById('lishare').className = "share animated bounceInLeft";
		document.getElementById('designfront').style.display="block";
		document.getElementById('designback').style.display="block";
		document.getElementById('colorpal').style.display="none";
		document.getElementById('divcustom').style.display="none";
		break;
	}
}

function colorClick(id)
{
	switch(id)
	{
		
	case "col1":
		document.getElementById('col1').className = "active";	
		document.getElementById('col2').className = "";	
		document.getElementById('col3').className = "";	
		document.getElementById('col4').className = "";	 
		break;
	case "col2":
		document.getElementById('col1').className = "";	
		document.getElementById('col2').className = "active";	
		document.getElementById('col3').className = "";	
		document.getElementById('col4').className = "";	 
		break;
	case "col3":
		document.getElementById('col1').className = "";	
		document.getElementById('col2').className = "";	
		document.getElementById('col3').className = "active";	
		document.getElementById('col4').className = "";	 
		break;
	case "col4":
		document.getElementById('col1').className = "";	
		document.getElementById('col2').className = "";	
		document.getElementById('col3').className = "";	
		document.getElementById('col4').className = "active";	 
		break;
	}
}

function addParameter(url, param, value) {
    // Using a positive lookahead (?=\=) to find the
    // given parameter, preceded by a ? or &, and followed
    // by a = with a value after than (using a non-greedy selector)
    // and then followed by a & or the end of the string
    var val = new RegExp('(\\?|\\&)' + param + '=.*?(?=(&|$))'),
        parts = url.toString().split('#'),
        url = parts[0],
        hash = parts[1]
        qstring = /\?.+$/,
        newURL = url;

    // Check if the parameter exists
    if (val.test(url))
    {
        // if it does, replace it, using the captured group
        // to determine & or ? at the beginning
        newURL = url.replace(val, '$1' + param + '=' + value);
    }
    else if (qstring.test(url))
    {
        // otherwise, if there is a query string at all
        // add the param to the end of it
        newURL = url + '&' + param + '=' + value;
    }
    else
    {
        // if there's no query string, add one
        newURL = url + '?' + param + '=' + value;
    }

    if (hash)
    {
        newURL += '#' + hash;
    }

    return newURL;
}