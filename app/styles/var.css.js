//!!! TODO: -- theme change the old var of flir
//! Please review the cart styles to ensure the variables are consistent.
///.../21072185/prj_1327/variants/cart_v4_5/angips/assets/less/variables.less
// --------------
// grid
//-------
@grid__gutter: @spacing_15; //* 
@grid-witdh__max: 1146px - ( 2 * @grid__gutter );
    //spacing
    @spacing_8: 8px;  //* xs
    @spacing_16: 16px;  //*
    @spacing_15: 15px;
    @spacing_24: 24px;  //*
    @spacing_32: 32px;
    @spacing_56: 56px;

/*FIGMA VAR*/
// ----------------
//font
// ------
    @font-family__body: 'Open Sans', Arial, Helvetica, sans-serif;
    @font-family__title: @font-family__body;
    @font-family__button: @font-family__body;
    @font-family__textbutton: @font-family__body;
    @font-family__emails: Arial, Helvetica, sans-serif;

    @font-family__icon: 'Font Awesome 5 Pro';
    //color
    @font-color__white:@color-white;
    @font-color__primary: @color-black__90; 
    @font-color__secundary: @color-black__60; 
    @font-color__disabled: @color-black__40; 
    @font-color__white: @color-white; 
    //size
    @font-size__xxs: 10px;
    @font-line-height__xxs: @font-line-height__m;  
    @font-size__xs: 12px;
    @font-line-height__xs: @font-line-height__m;  
    @font-size__s: 14px;
    @font-line-height__s: @font-line-height__m;
    @font-size__m: 16px;
    @font-line-height__m: 1.3;
    @font-size__l: 18px;
    @font-line-height__l: @font-line-height__m;
    @font-size__xl: 20px;
    @font-line-height__l: @font-line-height__m;
    //bold
    @font-weight__light: 300;
    @font-weight__regular: 400;
    @font-weight__bold-medium: 600;
    @font-weight__bold: 700;
// ----------------
//colors  
// ------
//PRIMARY
    @brand-primary:#3460de;
    @brand-primary__filter:brightness(0) saturate(100%) invert(36%) sepia(48%) saturate(4980%) hue-rotate(217deg) brightness(90%) contrast(93%);
    @brand-primary__hover:#2650c9;
    @brand-secondary:#ce4400;
    @brand-secondary__hover:#cb5323;
    //gray:
    @color-black__0:#ffffff;
    @color-black__10:#F4F4F4;
    @color-black__20:#E0E0E0;
    @color-black__30:#c6c6c6;
    @color-black__40:#aaaaaa;
    @color-black__60:#6E6F6E;
    @color-black__75:#707070;
    @color-black__90:#202020;
    //Red
    @color-red__60:#da1e28;
    //green
    @color-green__20:#A7F0BA;
    @color-green__30:#6FDC8C;
    @color-green__50:#24A148;
    @color-green__80:#044317;
    @color-green__80-filter:brightness(0) saturate(100%) invert(12%) sepia(67%) saturate(2270%) hue-rotate(125deg) brightness(101%) contrast(97%);
    //blue
    @color-blue__50:#4087FB;
    //blue
    @color-yellow__50:#FFA500;
//TOKENS
@color-white:@color-black__0;
//message
@color-select: @color-blue__50;
@color-error: @color-red__60;
@color-success: @color-green__50;
@color-warning: @color-yellow__50;
// ----------------
//border
// ------
//size
@border-size__m: 1px;
@border-size__l: 2px;
//color
@border-color:@color-black__30;
@border-color__primary:@border-color;
@border-color__secundary:@border-color;
@border-color__light:@color-black__30;
//radius
// @border-color:;
@border-radius__s:2px;
@border-radius__m:4px;
//@border-radius__subtle:@border-radius__m;
@border-radius__rounded:10000px;
@bg-cfdi-webform-button: #5ce0f2;
// ----------------
//Elements
// ------
//BUTTON -- Normal
//btn-primary
@btn-font-color:@color-white;
@btn-font-color__hover:@btn-font-color;
@btn-bg:@brand-primary;
@btn-bg__hover:@brand-primary__hover;
@btn-border-color:@btn-bg;
@btn-border-color__hover:@btn-bg__hover;
@btn-border-radius:@border-radius__m;
//btn-default
@btn-default-font-color:@font-color__primary;
@btn-default-font-color__hover:@font-color__secundary;
@btn-default-bg:@color-white;
@btn-default-bg__hover:@btn-default-bg;
@btn-default-border-color:@btn-default-font-color;
@btn-default-border-color__hover:@btn-default-font-color__hover;
//btn-link
@btn-link-font-color:@brand-primary;
@btn-link-font-color__hover:@brand-primary__hover;
//Disabled
@btn-disabled-font-color:@color-black__30;
@btn-disabled-font-color__hover:@btn-font-color;
@btn-disabled-bg:@color-black__10;
@btn-disabled-bg__hover:@brand-primary__hover;
@btn-disabled-border-color:@btn-disabled-bg;
@btn-disabled-border-color__hover:@btn-disabled-bg__hover;
//LABEL
@label-bg:@color-green__20;
@label-font-color: @color-green__80;
@label-color__filter:@color-green__80-filter; 
@label-border-color:@color-green__30; 
