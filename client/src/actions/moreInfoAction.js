

export const moreInfoAction=(allInfo)=>
{
    return({

        type:"fetshMoreInfo",
        payload: 
        {
            moreInfo:{allInfo},
        }

    });

}