'use strict'

const success_response = {
    insert : {
        status : true,
        resCode : 200,
        isError : false,
        message : "Data Inserted Successfully"
    },
    select : {
        status : true,
        resCode : 200,
        isError : false,
        message : "Data Found Successfully"
    },
    delete : {
        status : true,
        resCode : 200,
        isError : false,
        message : "Data Deleted Successfully"
    },
    update : {
        status : true,
        resCode : 200,
        isError : false,
        message : "Data Updated Successfully"
    },
    select_exist : {
        status : true,
        resCode : 200,
        isError : false,
        message : "Data Already Exist"
    },
};

module.exports = success_response;