export const Url=  'http://localhost:8000/api/';
export const ImageUrl= 'http://localhost:8000/Images/';

export const NavLink = [
    {url:'/', urlname:'home'},
    {url:'/myshop/:id', urlname:'myshop'},
    {url:'/create-shop', urlname:'create-shop'},
    {url:'/create-item', urlname:'create-item'},
    {url:'/index1', urlname:'index1'},
    {url:'/index2', urlname:'index2'},
    {url:'/index3', urlname:'index3'},
    {url:'/index4', urlname:'index4'},
]

export const Catageries = [
    {type:'vegitable', name:'vegitable', subtype:[
        {name:'abc'},{name:'cdh'},{name:'djkn'},{name:'njkb'},
    ]},
    {type:'electronic',name:'electronic', subtype:[
        {name:'fbd'},{name:'cdh'},{name:'djkn'},{name:'njkb'},
    ]},
    {type:'vehicle',name:'vehicle',  subtype:[
        {name:'ayjubc'},{name:'cdh'},{name:'djkn'},{name:'njkb'},
    ]},
    
]
export const Subtype = [
    {type:'vegitable', name:'vegitable', subtype:[
        {name:'abc'},{name:'cdh'},{name:'djkn'},{name:'njkb'},
    ]},
    {type:'electronic',name:'electronic', subtype:[
        {name:'abc'},{name:'cdh'},{name:'djkn'},{name:'njkb'},
    ]},
    {type:'vehicle',name:'vehicle',  subtype:[
        {name:'abc'},{name:'cdh'},{name:'djkn'},{name:'njkb'},
    ]},
    
]
export const GetSubtype=()=>{

    return [
        {type:'vegitable', name:'vegitable', subtype:[
            {name:'abc'},{name:'cdh'},{name:'djkn'},{name:'njkb'},
        ]},
        {type:'electronic',name:'electronic', subtype:[
            {name:'abc'},{name:'cdh'},{name:'djkn'},{name:'njkb'},
        ]},
        {type:'vehicle',name:'vehicle',  subtype:[
            {name:'abc'},{name:'cdh'},{name:'djkn'},{name:'njkb'},
        ]},
        
    ]
}