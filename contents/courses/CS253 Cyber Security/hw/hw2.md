Consider the following general code for allowing access to a resource:    

DWORD dwRet = IsAccessAllowed(...);    

if (dwRet == ERROR_ACCESS_DENIED) {

    // Security check failed.    

// Inform user that access is denied.    

} else {    

// Security check OK.    

}

a. Explain the security flaw in this program.

b. Rewrite the code to avoid the flaw.

Hint: Consider the design principle of fail-safe defaults.

a. The security flaw is that we don't sure what the value of dwRet is when the function IsAccessAllowed() failed. If dwRet doesn't have a default ERROR_ACCESS_DENIED, it will enter the code as if it passes the security check when function IsAccessAllowed() fails.

b. Two possible way to solve this problem.
First way is giving dwRet a default value ERROR_ACCESS_DENIED and the function IsAccessAllowed() will return ERROR_ACCESS_DENIED or nothing when failed. The code like below.

DWORD dwRet = ERROR_ACCESS_DENIED; 

dwRet = IsAccessAllowed(...);

if (dwRet == ERROR_ACCESS_DENIED) {

    // Security check failed.    

// Inform user that access is denied.    

} else {    

// Security check OK.    

}

Second way is that ensure dwRet is Access_Allowed. The code like below. Assume Access_Allowed is the flag means dwRet pass the security check.

DWORD dwRet = IsAccessAllowed(...);    

if (dwRet == ERROR_ACCESS_DENIED) {

    // Security check failed.    

// Inform user that access is denied.    

} else if (dwRet == Access_Allowed) {    

// Security check OK.    

}