function isFirstLetterUpperCase(str){
    let regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        document.writeln("String's "+str+" first character is uppercase<br/>");
    } else {
        document.writeln("String's "+str+" first character is not uppercase<br/>");
    }
}