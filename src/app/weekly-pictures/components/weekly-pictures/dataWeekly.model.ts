export interface DataWeekly{
    id: Int16Array;
    name:string;
    day:string;
    image:[
       {
            url:string
        },
        {
            url:string
        },
        {
            url:string
        }
    ];
    page:Int16Array;

}