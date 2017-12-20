(function() {
    var aList = [],
        headingList = [];
        headingListToString = [],
        fixLink = [],
        shortLink = [];

    var thisScript = document.querySelectorAll('SCRIPT');
    for(var i=0; i<thisScript.length; i++){
        var thisScriptSrc = thisScript[i].src;
        if (thisScriptSrc.includes("Simple")) {
            var templateColor = thisScript[i].id;
        }
    }

    var a = document.body.querySelectorAll('A'), 
        index = 0; 
    for( index=0; index < a.length; index++ ) {
        aList.push(a[index]);
    }

    for(var i=0; i<aList.length; i++){
        if (aList[i].textContent === 'Facebook') {
            creatImageLink('Facebook')
        }
        if (aList[i].textContent === 'Twitter') {
            creatImageLink('Twitter')
        }
        if (aList[i].textContent === 'YouTube') {
            creatImageLink('YouTube')
        }
        if (aList[i].textContent === 'Google+') {
            creatImageLink('Google+')
        }
        if (aList[i].textContent === 'Linkedin') {
            creatImageLink('Linkedin')
        }
        if (aList[i].textContent === 'Pinterest') {
            creatImageLink('Pinterest')
        }
        if (aList[i].textContent === 'Blogger') {
            creatImageLink('Blogger')
        }
        if (aList[i].textContent === 'WordPress') {
            creatImageLink('WordPress')
        }
        if (aList[i].textContent === 'Tumblr') {
            creatImageLink('Tumblr')
        }
        if (aList[i].textContent === 'Skype') {
            creatImageLink('Skype')
        }
        if (aList[i].textContent === 'Instagram') {
            creatImageLink('Instagram')
        }

    }

    for(var i=0; i<aList.length; i++){
        if (aList[i].href.includes('#h.')) {
            headingList.push(aList[i])
        }
        if (aList[i].href.includes('https://www.google.com/url?q=')) {
            fixLink.push(aList[i]);
        }
    }

    for(var i=0; i<fixLink.length; i++){
        var fixLinkA = fixLink[i].href.indexOf("&sa="),
            fixLinkB = fixLink[i].href.substring(29, fixLinkA)
            fixLinkC = fixLinkB.replace('%', '#');
            fixLinkD = fixLinkC.replace("http://localpath/", "");
        shortLink.push(fixLinkD);
    }

    for(var i=0; i<fixLink.length; i++){
        var textForLink = fixLink[i].textContent;
        fixLink[i].setAttribute("class", "outLinks");
        fixLink[i].setAttribute("href", shortLink[i]);
        fixLink[i].setAttribute("target", "_blank");
        fixLink[i].innerHTML = textForLink;
    }
   
    for(var i=0; i<headingList.length; i++){
        headingList[i].style.display = 'none';
    }

    var newStyle = document.createElement('link'),
        newMenu = document.createElement('div'),
        newScriptTag_Update_menu = document.createElement('script'),
        newHeader = document.createElement('header'),
        newTitle = document.createElement('title'),
        newMeta = document.createElement('meta'),
        newMetaViewport = document.createElement('meta'),
        newFavicon = document.createElement('link');
    newStyle.id = 'styleSheet';
    newMenu.id = 'leftSideMenuId';
    newScriptTag_Update_menu.id = 'update_Menu_ScriptTag';
    newHeader.id = 'titleHeader';
    newMeta.id = 'newMetaTag';
    newFavicon.id = 'theNewFavicon';
    newMenu.innerHTML = '<div id="wrapper"><center><img src="SimpleResponsiveTemplate/templateImages/menuTopImage.png" onclick="goOttom()" id="goToBottom"><a href="SimpleResponsiveTemplate/site_wide_menu.html" id="siteWideMenuAtag"><div id="siteWideMenu">Site Wide Menu</div></a></center><ul id="menuUl" class="menuListULtag"></ul><div><div id="menuBurgerIcon"><img src="SimpleResponsiveTemplate/templateImages/menuBurger.png" id="menuBurgerIconImg" alt="Menu"></div>';
        document.getElementsByTagName("HEAD")[0].appendChild(newStyle);
        document.getElementsByTagName("HEAD")[0].appendChild(newScriptTag_Update_menu);
        document.getElementsByTagName("HEAD")[0].appendChild(newTitle);
        document.getElementsByTagName("HEAD")[0].appendChild(newMeta);
        document.getElementsByTagName("HEAD")[0].appendChild(newMetaViewport);
        document.getElementsByTagName("HEAD")[0].appendChild(newFavicon);
        document.getElementsByTagName("BODY")[0].appendChild(newMenu);
        document.getElementsByTagName("h1")[0].appendChild(newHeader);
        var source = document.getElementById("styleSheet"),
            update_Menu = document.getElementById("update_Menu_ScriptTag"),
            metaDescription = document.getElementById("newMetaTag"),
            favicon = document.getElementById("theNewFavicon"),
            slideInAndOut = document.getElementById("leftSideMenuId"),
            thisSpan = document.querySelectorAll('SPAN'),
            plainTextList = [],
            allImgSpanTags = [];

                for(var i=0; i<thisSpan.length; i++){
                    plainText = thisSpan[i].textContent;
                    plainTextList.push(plainText);
                }

                for(var i=0; i<thisSpan.length; i++){
                    if(thisSpan[i].textContent.includes('(linked-image-asset)')){
                        linkedImagePathStart = thisSpan[i].textContent.indexOf("(linked-image-asset)");
                        linkedImagePathDivider = thisSpan[i].textContent.indexOf("link-to-address:");
                        linkedImagePathTerminator = thisSpan[i].textContent.lastIndexOf("(linked-image-asset)");
                        linkedImgAsset = thisSpan[i].textContent.substring(linkedImagePathStart+20, linkedImagePathDivider);
                        imgAssetLink = thisSpan[i].textContent.substring(linkedImagePathDivider+16, linkedImagePathTerminator);
                        thisSpan[i].outerHTML = '<a href="'+imgAssetLink.trim()+'" target="_blank" class="img-a-tags"><img src="assets/linked-images/'+linkedImgAsset.trim()+'" class="linked-image-asset"></img></a>';
                    }
                }


                for(var i=0; i<thisSpan.length; i++){
                    if(thisSpan[i].textContent.includes('(embed-video-asset)')){
                        videoPathStart = thisSpan[i].textContent.indexOf("(embed-video-asset)");
                        videoPathEnd = thisSpan[i].textContent.lastIndexOf("(embed-video-asset)");
                        videoAsset = thisSpan[i].textContent.substring(videoPathStart+19, videoPathEnd);
                        thisSpan[i].outerHTML = '<video src="assets/'+videoAsset.trim()+'" class="video" height="390" width="660" controls></video>';
                    }
                }

                for(var i=0; i<thisSpan.length; i++){
                    if(thisSpan[i].textContent.includes('(embed-audio-asset)')){
                        audioPathStart = thisSpan[i].textContent.indexOf("(embed-audio-asset)");
                        audioPathEnd = thisSpan[i].textContent.lastIndexOf("(embed-audio-asset)");
                        audioAsset = thisSpan[i].textContent.substring(audioPathStart+19, audioPathEnd);
                        thisSpan[i].outerHTML = '<audio src="assets/'+audioAsset.trim()+'" class="audio" controls></audio>';
                    }
                }

                for(var i=0; i<thisSpan.length; i++){
                    if(thisSpan[i].textContent.includes('(embed-video-or-html-code)')){
                        embed_HTML_Start = thisSpan[i].textContent.indexOf("(embed-video-or-html-code)");
                        embed_HTML_End = thisSpan[i].textContent.lastIndexOf("(embed-video-or-html-code)");
                        embed_HTML_Asset = thisSpan[i].textContent.substring(embed_HTML_Start+26, embed_HTML_End);
                        thisSpan[i].outerHTML = embed_HTML_Asset;
                    }
                }

                for(var i=0; i<thisSpan.length; i++){
                    if (thisSpan[i].innerHTML.includes("<img")){
                        allImgSpanTags.push(thisSpan[i]);
                    }
                }

                for(var i=0; i<allImgSpanTags.length; i++){
                    allImgSpanTags[i].setAttribute('class', 'percent_100_Images');
                    var allImgTags = allImgSpanTags[i].firstChild;
                    allImgTags.setAttribute('class', 'percent_100_Images');
                }

            allImg = document.querySelectorAll('IMG');

                for(var i=0; i<allImg.length; i++){
                    if (allImg[i].src.includes("/images/image")){
                        var imgSrc = allImg[i].src,
                            lastSlash = window.location.pathname.lastIndexOf("/"),
                            firstDotHtml = window.location.pathname.indexOf(".html"),
                            addFolder = window.location.pathname.substring(lastSlash, firstDotHtml),
                            replacementSRC = imgSrc.replace("/images/", "/images" + addFolder + "/");
                            allImg[i].setAttribute('src', replacementSRC);
                    }
                }

        var theTitle = document.getElementsByTagName("h1")[0].textContent;
        newTitle.innerHTML = theTitle;
        newHeader.innerHTML = '<center><div id="titleFont">' + theTitle + '</div></center><span id="logo"><img src="SimpleResponsiveTemplate/templateImages/logo.png" id="logoImg"></span>';
        var afJoin = plainTextList.join(" "),
            rMindent = afJoin.replace("        ", ""),
            getFirstP = rMindent.substring(0, 554);
        document.getElementsByTagName("BODY")[0].setAttribute('onload', 'updateMenu()');
        update_Menu.setAttribute('src', 'update_menu.js');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', getFirstP);
        newMetaViewport.setAttribute('name', 'viewport');
        newMetaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        favicon.setAttribute('href', 'SimpleResponsiveTemplate/templateImages/favicon.png');
        favicon.setAttribute('rel', 'icon');
        favicon.setAttribute('type', 'image/x-icon');
        source.setAttribute('rel', 'stylesheet');
        source.setAttribute('type', 'text/css');
        source.setAttribute('href', 'SimpleResponsiveTemplate/stylesheets/'+ templateColor +'Style.css');
        slideInAndOut.setAttribute('class', 'leftSideMenu');
        slideInAndOut.setAttribute('onclick', 'viewMenu()');

function creatImageLink(socialIcon){
    for(var i=0; i<aList.length; i++){
        if (aList[i].textContent === socialIcon) {
            var fixLinkA = aList[i].href.indexOf("&sa="),
                fixLinkB = aList[i].href.substring(29, fixLinkA);
    }   }
        this['img'+socialIcon+'link'] = document.getElementById(['img'+socialIcon+'link']);
        var socialIconId = document.getElementById(socialIcon);
    if (socialIconId === null){
        this['anew'+socialIcon+'link'] = document.createElement('A'),
        ['anew'+socialIcon+'link'].id = "img"+[socialIcon]+"Link";
        document.getElementsByTagName("BODY")[0].appendChild(this['anew'+socialIcon+'link']);
        this['anew'+socialIcon+'link'].setAttribute("class", "socialIcons");
        this['anew'+socialIcon+'link'].innerHTML = '<img src="SimpleResponsiveTemplate/templateImages/' + socialIcon + 'Icon.png" class="socialIcons"></img>';
        this['anew'+socialIcon+'link'].setAttribute("href", fixLinkB);
        this['anew'+socialIcon+'link'].setAttribute("target", "_blank");
        this['anew'+socialIcon+'link'].setAttribute("id", socialIcon);
    }
}

(function makeMenuList(){
    for(var i=0; i<headingList.length; i++){
        var headingHref = headingList[i].toString(),
            theLink = headingList[i].textContent,
            newMenuLi = document.createElement('li');
        newMenuLi.innerHTML = '<a href="' + headingHref + '" class="menuAtags">' + theLink + '</a>';
        document.getElementById("menuUl").appendChild(newMenuLi);
        newMenuLi.setAttribute('class', 'menuLiTags');
    }
}());

}());

function viewMenu() {
    var slideInAndOut = document.getElementById("leftSideMenuId");

    if (slideInAndOut.classList) { 
        slideInAndOut.classList.toggle("slideIn");
    } else {
        var classes = slideInAndOut.className.split(" ");
        var i = classes.indexOf("slideIn");

        if (i >= 0) 
            classes.splice(i, 1);
        else 
            classes.push("slideIn");
            slideInAndOut.className = classes.join(" "); 
    }
}

function goOttom() {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
}

function updateMenu(){
    if(siteWide_Menu_on_or_off === "off"){
        document.getElementById("siteWideMenuAtag").classList.add('siteWideMenuAtag');
        console.log('Site Wide Menu "off"');
    }   
}
