
const WesSite = 'http://142.44.247.169.xip.io:8000/';
//const WesSite = 'http://localhost:8000/';
export const wesitename = 'onShop';
export const WebUrl=  WesSite;
export const Url=  WesSite+'api/';
export const ImageUrl= WesSite+'Images/';

export const web ={
    weburl : WesSite,
    wetopic : 'onshop, This is a website that will aid you to do sales in an online platform for your business. This consists of several categories of items. There is a web page for every shop and item. Additionally, you have the ability to search for items of multiple natures.',
    webContent : 'All shop items in sri lanka',
    webImage : WesSite+'special/back2.jpg',
    webKeyword: 'onshop, sri lanka'
};


export const NavLink = [
    {url:'/', urlname:'home'},
    {url:'/shop/All-island', urlname:'all-shop'},
    {url:'/filter', urlname:'search-items'},
    {url:'/create-shop', urlname:'create-shop'},
    {url:'/about', urlname:'about-us'}
    //{url:'/myorder', urlname:'my-order'},
]

export const homeUrl = '/';
export const myoderUrl = '/myorder';
export const createcategorUrl = '/create-catagery';
export const updatecategoryUrl = '/update-category/'
export const categoryUrl = '/catagery/';
export const myProfileUrl = '/myprofile';
export const filteritemUrl = '/filter';
export const adminUrl = '/admin';

export const itemUrl = '/item/';
export const createitemUrl = '/create-item';
export const updateitemUrl = '/update-item/';

export const myshopmUrl = '/myshop/';
export const shopmUrl = '/shop/';
export const updateshopUrl = '/update-shop/';
export const createshopUrl = '/create-shop';


export const cartitemMSG = 'if you request item, you can keep massage to seller.';
export const cartUserdetails = 'here your details that you provided, if you need to change you can change above details.'
export const cartUserNotlogin= 'you are not sign in, please sign in before request.';