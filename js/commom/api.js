/*const config = {
    interface: "http://192.168.8.133:8766"
};*/
// var Interface = "http://192.168.8.132:8766";
// var InterfaceGYX = "http://192.168.8.132:8777";
// var InterfaceDZSW = "http://192.168.8.132:8776";

const Interface = "http://192.168.8.166:8766";
const InterfaceGYX = "http://192.168.8.166:8777";
const InterfaceDZSW = "http://192.168.8.166:8776";

function doApi(sucFunc, errFunc, comFunc, url, type, params, contentType, async) {
    $.ajax({
        url: url,
        data: params,
        type: type,
        async: async ?async :true,
        contentType: contentType,
        // async: true,
        beforeSend: function (request) {
            var token = localStorage.getItem('token');
            if (token) {
                request.setRequestHeader('Authorization', token);
            }
        },
        success: sucFunc,
        error: function (res) {
            if (res.responseText.substr(0, 30) === "AuthenticationEntryPoint检测到异常:") {
                localStorage.removeItem('token');
                window.location.href = 'Login.html';
            } else if (errFunc) {
                errFunc(res);
            }
        },
        complete: comFunc
    });
}

// function doApiByJsonstr(sucFunc, errFunc, comFunc, url, type, params, async) {

//     var jsonParams = null;
//     if (params) {
//         jsonParams = JSON.stringify(params);
//     }
//     doApi(sucFunc, errFunc, comFunc, url, type, jsonParams, 'application/json', async)
// }

function doApi_2(sucFunc, errFunc, comFunc, url, type, params, contentType, async) {
    $.ajax({
        url: InterfaceDZSW + url,
        data: params,
        type: type,
        contentType: contentType,
        success: sucFunc,
        error: function (err) {
            console.log(err)
        },
        complete: comFunc
    });
}

function doApi_3(sucFunc, errFunc, comFunc, url, type, params, contentType, async) {
    $.ajax({
        url: InterfaceDZSW + url,
        data: params,
        type: type,
        contentType: contentType,
        // async :async ?async :true,
        // contentType: false,
        processData: false, //是否预处理数据:默认为true，默认情况下，发送的数据将被转换为对象，设为false不希望进行转换
        // async: false,
        success: sucFunc,
        error: function (res) {
            if (res.responseText.substr(0, 30) === "AuthenticationEntryPoint检测到异常:") {
                localStorage.removeItem('token');
                window.location.href = 'Login.html';
            } else if (errFunc) {
                errFunc(res);
            }
        },
        complete: comFunc
    });
}