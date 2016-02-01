// JavaScript Document
/*
,---.|             |o      ,---.     o ,---.              
`---.|--- .   .,---|.,---. |  _.,---.. |__.,---.,---.,---.
    ||    |   ||   |||   | |   ||    | |   ,---||    |---'
`---'`---'`---'`---'``---' `---'`    ` `   `---^`    `---'  

 * Author name : Armagan Tekdoner
 * Release date: February 2016
 */

var today = new Date();
// assigns current year
var year = today.getFullYear();

var industryProfessional = "<h2><abbr title='Oh My God'>OMG</abbr>! You scored 100%.</h2><p>Unless you are an industry professional who simply viewed the source code, you really are good at detecting web tricks. Could you detect the svg image as well?</p>";

$(document).ready(function(){
// submit button
$( "input[type='submit']" ).click( function(){
  // if nothing has been chosen nothing happens
  if( $( "input:checked" ).length == 0 ){
  alert("Please take the test first");
  }
  // the test starts if a choice was made
  else{// else1	  
	// hides the submit button to prevent multiple submissions
	$( "input[type='submit']" ).css('visibility','hidden');
	// inserts the second section as content place holder
	$( "section" ).after( "<section></section>" );
	
	  // if the correct radio is chosen
	  if ( $("#choice6" ).is(':checked') ){
		// inserts checkmarks next to all choices				
		$( "li" ).find( "input[type='checkbox']" ).before( "<span>\u2714</span>" );
		// posts the results
		$( "section:nth-of-type(2)" ).append( industryProfessional );		  
	  }
	  
	  // if the incorrect radio is chosen	  
	  else if ( $("#choice7" ).is(':checked') ){
		// inserts cross signs next to all choices				
		$( "li" ).find( "input[type='checkbox']" ).before( "<span style='color: red;'>\u274c</span>" );
		// unchecks all the other options
		$( "input[type='checkbox']" ).prop('checked', false);
		// posts the results
		$( "section:nth-of-type(2)" ).append( "<h2>Uh-oh! You scored 0%.</h2><p>Suspicious Minds, eh? False positives are no big fun, how many times a year are you visited by firefighters though there is no fire?</p>" );				  
	  }// close else if
	  
	  // if radio buttons not used		  
	  else{
		// inserts a checkmark next to each checked box
		$( "li" ).find( "input[type='checkbox']:checked" ).before( "<span>\u2714</span>" );
		// inserts a cross sign next to each unchecked box
		$( "li" ).find( "input:checkbox:not(:checked)" ).before( "<span style='color: red;'>\u274c</span>" );
		
		  // results for individual checkboxes		
		  if( $( "input[type='checkbox']:checked" ).length == 1 ){
			  $( "section:nth-of-type(2)" ).append( "<h2>Jeesh! You scored 20%.</h2><p>At least, you expected one of them to be real despite they all looked suspicious.</p>" );
		  }	
		  if( $( "input[type='checkbox']:checked" ).length == 2 ){
			  $( "section:nth-of-type(2)" ).append( "<h2>It's OK Sam. You scored 40%.</h2><p>What difference did you notice between the <em>real</em> and <em>fake</em> ones?</p>" );
		  } 
		  if( $( "input[type='checkbox']:checked" ).length == 3 ){
			  $( "section:nth-of-type(2)" ).append( "<h2>Pas mal ! You scored 60%.</h2><p>Purely random or educated guess?</p>" );
		  }	
		  if( $( "input[type='checkbox']:checked" ).length == 4 ){
			  $( "section:nth-of-type(2)" ).append( "<h2>Good job! You scored 80%.</h2><p>What made you see that one as the only fake?</p>" );
		  } 
		  if( $( "input[type='checkbox']:checked" ).length == 5 ){
			  $( "section:nth-of-type(2)" ).append( industryProfessional );
		  }  		  
				
	  }// close else
	
	// posted in all cases
	// indicates the image
	$( "fieldset img" ).css( {'border-bottom':'solid 4px red','margin-bottom':'-4px'} );
	// posts the message
	$( "section:nth-of-type(2)" ).append( "<p> \u2014 <strong>All sentences are real text, the only text-looking image (fake text) is the red-underlined question itself</strong>.</p><p><cite>While all candidates were suspected of plagiarism, the only cheater was the instructor.</cite><br /> \u2014 New York Thames</p>" );
	
  }// close else1
	  
	  
// prevents page refresh
return false;
});// close click
  
  // reset button  
  $( "input[type='reset']" ).click( function(){
	  // shows the previously hidden submit button
	  $( "input[type='submit']" ).css('visibility','visible');
	  // hides all dynamically-created elements
	  $("span, section:nth-of-type(2)" ).hide(400);
	  // removes the border
	  $( "fieldset img" ).css( {'border-bottom':'none','margin-bottom':'0px'} );	  
  });// close click  

});// close doc dot ready