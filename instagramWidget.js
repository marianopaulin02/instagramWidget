(function(document,window){
    var loaded,
    htmlSource = `<div class="instaWidget"><div class="instaWidgetCnt"><div class="instaTop"><div class="instaThumb"> <img src="{{instaThumb}}"></div><div class="instaBasic"><h1 class="instaTitle"><span class="instaUser">{{username}}</span><span class="instaVerified"></span></h1> <a href="{{instaURL}}" target="_blank"><div class="instaFollow">{{followBt}}</div><div class="instaFollowing">{{followingBt}}</div></a></div><div class="instaSub"><div class="instaName">{{fullname}}</div><div class="instaDescrip">{{description}}</div> <a href="{{urlshimmed}}" class="instaLink">{{url}}</a><div class="instaMutual"> <span class="instaMoreCount">{{followedBy}} </span> <span class="instaRelated"></span> <a href="{{instaURL}}/followers/mutualOnly" class="instaMoreCount1"> {{andMore}}</a></div></div></div><div class="instaStats"> <a href="{{instaURL}}" class="instaData instaPostsUrl"> <span class="instaNum">{{postsCount}}</span> <span class="instaDt">{{posts}}</span> </a> <a href="{{instaURL}}/followers/" class="instaData instaFollowersUrl"> <span class="instaNum">{{followersCount}}</span> <span class="instaDt">{{followers}}</span> </a> <a href="{{instaURL}}/following/" class="instaData instaFollowingUrl"> <span class="instaNum">{{followingCount}}</span> <span class="instaDt">{{following}}</span> </a></div><div class="instaPosts"><div class="instaRow"> <a class="instaPhoto" target="_blank"><div class="instaItem"><div class="instaType"></div> <img class="instaPic"><div class="instaHover"><span><i class="instaLike"></i><span class="instaLikesCount"></span></span><span><i class="instaComment"></i><span class="instaCommentsCount"></span></span></div></div> </a></div></div><div class="instaSeemore"> <a href="{{instaURL}}" class="instaAccount"><div class="instaMore">{{seemore}}</div></a></div></div></div>`,
    css=`.instaWidget{text-align:center;background:#fafafa;overflow:hidden;margin-bottom:14px;}.instaWidgetCnt{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;max-width:935px;display:inline-block;width:100%;width:calc(100% - 20px);padding:10px;text-align:left}h1.instaTitle{font-weight:300;font-size:28px;color:#262626;line-height:40px;margin:0;display:flex}.instaTop{padding:10px 10px 0 10px}.instaFollow,.instaFollowing,.instaMore{background:#3897f0;color:#FFF;font-size:14px;cursor:pointer;padding:3px 9px 6px 5px;text-align:center;width:auto;font-weight:600;display:inline-block;border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px}.instaMore{margin:14px 0 10px 0}.instaFollowing{background:transparent;border:1px solid #dbdbdb;color:#262626}.instaThumb{width:77px;height:77px;border-radius:100px;-moz-border-radius:100px;-webkit-border-radius:100px;overflow:hidden;display:inline-block;border:3px solid #FFF}.instaThumb img{width:100%;height:100%}.instaBasic{margin:-92px 0 36px 98px}.instaUser{overflow:hidden;text-overflow:ellipsis}.instaVerified,.instaHover i{background-image:url(https://www.instagram.com/static/bundles/es6/sprite_core_f01fcb405c10.png/f01fcb405c10.png)}.instaVerified{width:18px;height:18px;position:relative;background-position:20px 121px;margin-left:4px;bottom:-12px;min-width:18px}.instaSub{color:#000;font-size:14px}.instaName{font-weight:600}.instaDescrip{font-weight:400}a.instaLink{color:#003569;cursor:pointer;font-weight:600;line-height:20px;text-decoration:none}.instaMutual{margin-top:14px;font-size:12px;color:#999;font-weight:500}.instaMutual a{color:#262626;font-weight:500}a.instaMoreCount1{text-decoration:none;color:#999}.instaStats{border-top:1px solid #efefef;border-bottom:1px solid #efefef;display:flex;padding:12px 0;margin:14px 0 14px 0}a.instaData{display:flex;flex-direction:column;text-align:center;width:100%;font-size:14px;text-decoration:none}.instaNum{color:#262626;font-weight:600}.instaDt{color:#999}.instaRow{display:flex}.instaPic{object-fit:cover;width:100%;height:100%}.instaItem{position:relative;height:100%}.instaHover{display:none;position:absolute;top:0;width:100%;height:100%;color:#FFF;flex-direction:row;align-items:center;justify-content:center;font-weight:600;font-size:14px}.instaItem:hover .instaHover{display:flex;background:rgba(0,0,0,0.32)}.instaType{width:20px;height:20px;position:absolute;right:8px;top:8px;background-image:url(https://www.instagram.com/static/bundles/es6/sprite_mediatypes_65c15d7731ea.png/65c15d7731ea.png)}.instaType.GraphImage{background-position:-40px -40px}.instaType.GraphSidecar{background-position:-6px -6px}.instaType.GraphVideo{background-position:-6px -40px}.instaType.GraphTv{background-position:-40px -5px}.instaLike,.instaComment{width:20px;height:20px;margin:0 6px -3px 0;display:inline-block}.instaLike{background-position:-225px 45px}.instaComment{background-position:-246px 45px;margin-left:10px}.instaSeemore{text-align:center}@media only screen and (max-width:735px){.instaItem.instaPadd{margin-left:2px;margin-bottom:2px}.instaHover{flex-direction:column}.instaComment{margin-left:10px}}@media only screen and (min-width:736px){.instaItem.instaPadd{margin-left:28px}.instaRow{margin-bottom:28px}}`,
    translations={
        en:{
            followers:'followers',
            following:'following',
            posts:'posts',
            followedBy:'Followed by',
            andMore:'+ # more',
            followBt:'Follow',
            followingBt:'Following',
            seemore:'See more on Instagram',
            k:'k',
            m:'M'
        },
        es:{
            followers:'seguidores',
            following:'siguiendo',
            posts:'publicaciones',
            followedBy:'Seguido por',
            andMore:'y # más',
            followBt:'Seguir',
            followingBt:'Siguiendo',
            seemore:'Ver más en Instagram',
            k:'mil',
            m:'Mill'
        }
    },
    process = function(source,widgetPlace){
        var test = ['_sharedData =','_sharedData='], found, testStr, end, data, user, instaURL='https://instagram.com/', widgetCnt;
        for (var i = 0; i < test.length; i++) {
            testStr = test[i];
            found = source.indexOf(testStr)
            if(found!=-1)break;
        }
        if(found==-1){//no se encontro data
            return console.log('Error loading Instagram Widget');
        }
        end = source.indexOf('</script',found);
        while (source[end]!='}') {
            end--;
        }
        data = JSON.parse(source.substring(found+testStr.length,end+1));
        if(!loaded){
            loaded=true
            var lang = data.language_code
            if(!translations[lang])lang='en';
            translations = translations[lang]
        }
        user = data.entry_data.ProfilePage[0].graphql.user
        var fillData={
            instaThumb:user.profile_pic_url,
            username:user.username,
            instaURL:instaURL+user.username,
            fullname:user.full_name,
            description:user.biography.replace(new RegExp("\n", 'g'),'<br>'),
            url:user.external_url,
            urlshimmed:user.external_url_linkshimmed,
            postsCount:num2Text(user.edge_owner_to_timeline_media.count),
            followersCount:num2Text(user.edge_followed_by.count),
            followingCount:num2Text(user.edge_follow.count),
        }
        translations = Object.assign(translations,fillData);
        var html = htmlSource
        for (var key in translations) {
            html = html.replace(new RegExp('{{'+key+'}}', 'g'),translations[key])
        }
        function num2Text(num){
            if(num>1000000){
                return (num/1000000).toFixed(2)+translations.m
            }else if(num>1000){
                return (num/1000).toFixed(1)+translations.k
            }else{
                return num
            }
        }
        function getElement(selector,element){
            if(element){
                return element.querySelector(selector)
            }else{
                return widgetCnt.getElementsByClassName('insta'+selector)[0]
            }
        }
        function remove(selector){
            var element = getElement(selector)
            element.parentElement.removeChild(element)
        }
        function generateHTML(htmlStr){
            var node = document.createElement('div')
            node.innerHTML = htmlStr;
            return node.children
        }
        widgetCnt = document.createElement('div');
        widgetCnt.innerHTML = html;
        if(user.followed_by_viewer){
            remove('Follow')
        }else{
            remove('Following')
        }
        if(!user.is_verified){
            remove('Verified')
        }
        if(!user.edge_owner_to_timeline_media.page_info.has_next_page){
            remove('Seemore')
        }
        if(user.edge_mutual_followed_by.count){
            var mutual = user.edge_mutual_followed_by.edges,
                total = user.edge_mutual_followed_by.count,
                cnt = getElement('Related'),
                max = (mutual.length>3)?3:mutual.length;
            for (var i = 0; i < max; i++) {
                var username = mutual[i].node.username
                cnt.append(generateHTML('<a href="'+instaURL+username+'" target="_blank" class="instaLink">'+username+'</a>')[0]);
                if(i+1!=max)cnt.append(', ')
            }
            if(total>3){
                getElement('MoreCount1').innerText = translations.andMore.replace('#',total-3)
            }else{
                remove('MoreCount')
                remove('MoreCount1')
            }
        }else{
            remove('Mutual')
        }
        var postTemplate = getElement('Photo').cloneNode(true)
        remove('Photo')
        var row,node,i=0,rowTemplate = getElement('Row').cloneNode(true),posts=user.edge_owner_to_timeline_media,windowSize = window.screen.availWidth || 935;
        remove('Row')
        if(windowSize>935)windowSize=935
        windowSize = parseInt(windowSize/3)
        if(posts.count){
            posts = posts.edges
            var postsElements = getElement('Posts');
            for (; i < posts.length;) {
                row = rowTemplate.cloneNode(true)
                for (var r = 0; r < 3 && i < posts.length; r++) {
                    node = posts[i].node;
                    postCurent = postTemplate.cloneNode(true)
                    getElement('.instaLikesCount',postCurent).innerText=num2Text(node.edge_liked_by.count)
                    getElement('.instaCommentsCount',postCurent).innerText=num2Text(node.edge_media_to_comment.count)
                    postCurent.setAttribute('href',instaURL+'p/'+node.shortcode)
                    var pic = getElement('.instaPic',postCurent),imgURLList=[],thumbs=node.thumbnail_resources;
                    pic.setAttribute('src',thumbs[0].src);
                    for (var m = 0; m <thumbs.length; m++) {
                        if(thumbs[m].config_width>windowSize){
                            pic.setAttribute('src',thumbs[m].src);
                            break;
                        }
                    }
                    getElement('.instaType',postCurent).classList.add(node.__typename)
                    pic.setAttribute('alt',node.accessibility_caption);
                    if(r>0)postCurent.children[0].classList.add('instaPadd')
                    row.append(postCurent)
                    i++
                }
                postsElements.append(row)
            }
        }else {

        }
        widgetPlace.innerHTML = ''
        widgetPlace.appendChild(widgetCnt)
    },
    ready = function(){
        var widgetPlaces = document.querySelectorAll('#instaWidget')
        for (var i = 0,username; i < widgetPlaces.length; i++) {
            try {
                username = widgetPlaces[i].attributes['data-username'].value
            } catch (e) {
                console.info('No data-username given')
            }
            (function(widgetPlace,username){
                (function(widgetPlace,username){
                var xhttp = new XMLHttpRequest()
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4){
                        if(this.status == 200) {
                           process(xhttp.responseText,widgetPlace);
                        }
                        if(this.status == 404) {
                           console.info(username+' account not found on Instagram')
                        }
                    }
                };
                xhttp.open("GET", 'https://www.instagram.com/'+username+'/', true);
                xhttp.send();
            })(widgetPlace,username)})(widgetPlaces[i],username)
        }
    }
//listen document load end
if (document.addEventListener) {
    // first choice is DOMContentLoaded event
    document.addEventListener("DOMContentLoaded", ready, false);
} else {// must be IE
    function readyStateChange() {
        if ( document.readyState === "complete" )ready();
    }
    document.attachEvent("onreadystatechange", readyStateChange);
    window.attachEvent("onload", ready);
}
//add styles
var head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
})(document,window)
