/*
 * Returns true if running on a production-like ip address
 */
function isProduction()
{
    var localhostList = ["localhost", "192.168", "127.0"];
    var localhostListLength = localhostList.length;
    var production = true;
    for (var i=0; (i<localhostListLength && production); ++i) 
    {
        if (window.location.host.slice(0, localhostList[i].length) == localhostList[i])
            production = false;
    }
    return production;
}