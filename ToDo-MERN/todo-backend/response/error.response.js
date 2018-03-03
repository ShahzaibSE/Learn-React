'use strict'

const error_response = {
    insert : {
        status : false,
        resCode : 500,
        isError : true,
        message : "Invalid parameters passed"
    },
    select : {
        status : false,
        resCode : 500,
        isError : true,
        message : "Invalid query"
    },
    delete : {
        status : false,
        resCode : 500,
        isError : true,
        message : "Invalid parameter found during deletion"
    },
    update : {
        status : false,
        resCode : 500,
        isError : true,
        message : "Record not found"
    },
};

module.exports = error_response;