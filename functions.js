function goLevel1()
{
    var x = Math.floor((Math.random() * 3) + 1);
    if (x==1)
    {
        window.location.href = "level11.html";
    }
    else if (x==2)
    {
        window.location.href = "level12.html";
    }
    else if (x==3)
    {
        window.location.href = "level13.html";
    }

}
// blink title
var myVar = setInterval(blink, 1500);

function blink()
{
    let image1 = document.getElementById('shi');
    let image2 = document.getElementById('ri1');
    let image3 = document.getElementById('to');
    let image4 = document.getElementById('ri2');

    if(image1.style.visibility== 'hidden')
    {
        image1.style.visibility= 'visible';
    }
    else
    {
        image1.style.visibility= 'hidden';
    }
    if(image2.style.visibility== 'hidden')
    {
        image2.style.visibility= 'visible';
    }
    else
    {
        image2.style.visibility= 'hidden';
    }
    if(image3.style.visibility== 'hidden')
    {
        image3.style.visibility= 'visible';
    }
    else
    {
        image3.style.visibility= 'hidden';
    }
    if(image4.style.visibility== 'hidden')
    {
        image4.style.visibility= 'visible';
    }
    else
    {
        image4.style.visibility= 'hidden';
    }
}


var image_front0 = 'blank'
var image_front1 = 'blank'
var image_front2 = 'blank'
var image_front3 = 'blank'
var image_front4 = 'blank'
var image_front5 = 'blank'
var image_front6 = 'blank'


function move1(i)
{
    // get an src of the photo clicked
    var mysrc = document.getElementById(i).getAttribute("src");
    var myid = document.getElementById(i).getAttribute("id");
    var myalt = document.getElementById(i).getAttribute("alt");
    var myfirst = myalt.charAt(0);
    // image sorce of the photos on the top
    image0 = document.getElementById("animal0");
    image1 = document.getElementById("animal1");
    image2 = document.getElementById("animal2");
    image3 = document.getElementById("animal3");
    var im1src = image1.getAttribute("src");
    var im2src = image2.getAttribute("src");
    var im3src = image3.getAttribute("src");
    // last letter of the first photo
    var firstalt = image0.getAttribute("alt");
    var lastLetter = firstalt.charAt(firstalt.length-1);
    var audioWrong = document.getElementById("audioW");
    var audiocorrect = document.getElementById("audioC");
    var audioAll = document.getElementById("allDone");

    if (image_front1 == 'blank')
    {
        // put the photo in the first slot
        image1.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front1 = myid;
        // display the name of the photo
        document.getElementById("name1").innerHTML = myalt;
        if(myfirst == lastLetter)
        {
            document.getElementById("result1").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result1").src = "photos/batsu.jpg";
            audioWrong.play();
        }

    }
    else if (image_front2 == 'blank')
    {
        // put the photo in the 2nd slot
        image2.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front2 = myid;
        document.getElementById("name2").innerHTML = myalt;
        var n1 = document.getElementById("name1").innerHTML;
        var n1Last = n1.charAt(n1.length-1);
        if(n1Last == myfirst)
        {
            document.getElementById("result2").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result2").src = "photos/batsu.jpg";
            audioWrong.play();
        }

    }
    else if (image_front3 == 'blank')
    {
        // put the photo in the 3rd slot
        image3.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front3 = myid;
        document.getElementById("name3").innerHTML = myalt;
        var n2 = document.getElementById("name2").innerHTML;
        var n2Last = n2.charAt(n2.length-1);
        // result fields
        var re1 = document.getElementById("result1").getAttribute("src");
        var re2 = document.getElementById("result2").getAttribute("src");
        if(n2Last == myfirst)
        {
            document.getElementById("result3").src = "photos/maru.jpg";

            if(re1=='photos/maru.jpg' && re2=='photos/maru.jpg')
            {
                document.getElementById("Go2").style.visibility = 'visible';
                document.getElementById("doggy").src="photos/goodJob.JPG";
                document.elementFromPoint(0, 0).click();
                audioAll.play();
            }
        }
        else
        {
            document.getElementById("result3").src = "photos/batsu.jpg";
            audioWrong.play();
        }
    }
}

function undo1(i)
{
    // get a slot#
    var photoid = document.getElementById(i).getAttribute("id");

    image1 = document.getElementById("animal1");
    image2 = document.getElementById("animal2");
    image3 = document.getElementById("animal3");
    var im1src = image1.getAttribute("src");
    var im2src = image2.getAttribute("src");
    var im3src = image3.getAttribute("src");

    if (photoid == 'animal1')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front1).style.opacity = "1.0";
        // remove the photo from the top
        image1.src = 'photos/blank.jpg';
        image_front1 = 'blank';
        document.getElementById("name1").innerHTML = '';
        document.getElementById("result1").src = 'photos/blank.jpg';
        document.getElementById("Go2").style.visibility = 'hidden';
        document.getElementById("doggy").src="photos/level1.JPG"
    }
    else if (photoid == 'animal2')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front2).style.opacity = "1.0";
        image2.src = 'photos/blank.jpg';
        image_front2 = 'blank';
        document.getElementById("name2").innerHTML = '';
        document.getElementById("result2").src = 'photos/blank.jpg';
        document.getElementById("Go2").style.visibility = 'hidden';
        document.getElementById("doggy").src="photos/level1.JPG"
    }
    else if (photoid == 'animal3')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front3).style.opacity = "1.0";
        image3.src = 'photos/blank.jpg';
        image_front3 = 'blank';
        document.getElementById("name3").innerHTML = '';
        document.getElementById("result3").src = 'photos/blank.jpg';
        document.getElementById("Go2").style.visibility = 'hidden';
        document.getElementById("doggy").src="photos/level1.JPG"
    }
}

function goLevel2()
{
    var x = Math.floor((Math.random() * 3) + 1);
    if (x==1)
    {
        window.location.href = "level21.html";
    }
    else if (x==2)
    {
        window.location.href = "level22.html";
    }
    else if (x==3)
    {
        window.location.href = "level23.html";
    }

}

function move2(i)
{
    // get an src of the photo clicked
    var mysrc = document.getElementById(i).getAttribute("src");
    var myid = document.getElementById(i).getAttribute("id");
    var myalt = document.getElementById(i).getAttribute("alt");
    var myfirst = myalt.charAt(0);
    // image sorce of the photos on the top
    image0 = document.getElementById("animal0");
    image1 = document.getElementById("animal1");
    image2 = document.getElementById("animal2");
    image3 = document.getElementById("animal3");
    image4 = document.getElementById("animal4");
    var im1src = image1.getAttribute("src");
    var im2src = image2.getAttribute("src");
    var im3src = image3.getAttribute("src");
    var im4src = image4.getAttribute("src");
    // last letter of the first photo
    var firstalt = image0.getAttribute("alt");
    var lastLetter = firstalt.charAt(firstalt.length-1);
    var audioWrong = document.getElementById("audioW");
    var audiocorrect = document.getElementById("audioC");
    var audioAll = document.getElementById("allDone");

    if (image_front1 == 'blank')
    {
        // put the photo in the first slot
        image1.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front1 = myid;
        // display the name of the photo
        document.getElementById("name1").innerHTML = myalt;
        if(myfirst == lastLetter)
        {
            document.getElementById("result1").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result1").src = "photos/batsu.jpg";
            audioWrong.play();
        }

    }
    else if (image_front2 == 'blank')
    {
        // put the photo in the 2nd slot
        image2.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front2 = myid;
        document.getElementById("name2").innerHTML = myalt;
        var n1 = document.getElementById("name1").innerHTML;
        var n1Last = n1.charAt(n1.length-1);
        if(n1Last == myfirst)
        {
            document.getElementById("result2").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result2").src = "photos/batsu.jpg";
            audioWrong.play();
        }

    }
    else if (image_front3 == 'blank')
    {
        // put the photo in the 3rd slot
        image3.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front3 = myid;
        document.getElementById("name3").innerHTML = myalt;
        var n2 = document.getElementById("name2").innerHTML;
        var n2Last = n2.charAt(n2.length-1);
        // result fields
        var re1 = document.getElementById("result1").getAttribute("src");
        var re2 = document.getElementById("result2").getAttribute("src");
        if(n2Last == myfirst)
        {
            document.getElementById("result3").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result3").src = "photos/batsu.jpg";
            audioWrong.play();
        }
    }
    else if (image_front4 == 'blank')
    {
        // put the photo in the 3rd slot
        image4.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front4 = myid;
        document.getElementById("name4").innerHTML = myalt;
        var n3 = document.getElementById("name3").innerHTML;
        var n3Last = n3.charAt(n3.length-1);
        // result fields
        var re1 = document.getElementById("result1").getAttribute("src");
        var re2 = document.getElementById("result2").getAttribute("src");
        var re3 = document.getElementById("result3").getAttribute("src");
        if(n3Last == myfirst)
        {
            document.getElementById("result4").src = "photos/maru.jpg";

            if(re1=='photos/maru.jpg' && re2=='photos/maru.jpg' && re3=='photos/maru.jpg')
            {
                document.getElementById("Go3").style.visibility = 'visible';
                document.getElementById("doggy").src="photos/goodJob.JPG";
                audioAll.play();
            }
        }
        else
        {
            document.getElementById("result4").src = "photos/batsu.jpg";
            audioWrong.play();
        }
    }
}

function undo2(i)
{
    // get a slot#
    var photoid = document.getElementById(i).getAttribute("id");

    image1 = document.getElementById("animal1");
    image2 = document.getElementById("animal2");
    image3 = document.getElementById("animal3");
    image4 = document.getElementById("animal4");
    var im1src = image1.getAttribute("src");
    var im2src = image2.getAttribute("src");
    var im3src = image3.getAttribute("src");
    var im4src = image4.getAttribute("src");

    if (photoid == 'animal1')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front1).style.opacity = "1.0";
        // remove the photo from the top
        image1.src = 'photos/blank.jpg';
        image_front1 = 'blank';
        document.getElementById("name1").innerHTML = '';
        document.getElementById("result1").src = 'photos/blank.jpg';
        document.getElementById("Go3").style.visibility = 'hidden';
        document.getElementById("doggy").src="photos/level2.JPG"
    }
    else if (photoid == 'animal2')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front2).style.opacity = "1.0";
        image2.src = 'photos/blank.jpg';
        image_front2 = 'blank';
        document.getElementById("name2").innerHTML = '';
        document.getElementById("result2").src = 'photos/blank.jpg';
        document.getElementById("Go3").style.visibility = 'hidden';
        document.getElementById("doggy").src="photos/level2.JPG"
    }
    else if (photoid == 'animal3')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front3).style.opacity = "1.0";
        image3.src = 'photos/blank.jpg';
        image_front3 = 'blank';
        document.getElementById("name3").innerHTML = '';
        document.getElementById("result3").src = 'photos/blank.jpg';
        document.getElementById("Go3").style.visibility = 'hidden';
        document.getElementById("doggy").src="photos/level2.JPG"
    }
    else if (photoid == 'animal4')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front4).style.opacity = "1.0";
        image4.src = 'photos/blank.jpg';
        image_front4 = 'blank';
        document.getElementById("name4").innerHTML = '';
        document.getElementById("result4").src = 'photos/blank.jpg';
        document.getElementById("Go3").style.visibility = 'hidden';
        document.getElementById("doggy").src="photos/level2.JPG"
    }

}

function goLevel3()
{
    var x = Math.floor((Math.random() * 3) + 1);
    if (x==1)
    {
        window.location.href = "level31.html";
    }
    else if (x==2)
    {
        window.location.href = "level32.html";
    }
    else if (x==3)
    {
        window.location.href = "level33.html";
    }

}

function move3(i)
{
    // get an src of the photo clicked
    var mysrc = document.getElementById(i).getAttribute("src");
    var myid = document.getElementById(i).getAttribute("id");
    var myalt = document.getElementById(i).getAttribute("alt");
    var myfirst = myalt.charAt(0);
    // image sorce of the photos on the top
    image0 = document.getElementById("animal0");
    image1 = document.getElementById("animal1");
    image2 = document.getElementById("animal2");
    image3 = document.getElementById("animal3");
    image4 = document.getElementById("animal4");
    var im1src = image1.getAttribute("src");
    var im2src = image2.getAttribute("src");
    var im3src = image3.getAttribute("src");
    var im4src = image4.getAttribute("src");
    // last letter of the first photo
    var firstalt = image0.getAttribute("alt");
    var lastLetter = firstalt.charAt(firstalt.length-1);
    var audioWrong = document.getElementById("audioW");
    var audiocorrect = document.getElementById("audioC");
    var audioAll = document.getElementById("allDone");

    if (image_front1 == 'blank')
    {
        // put the photo in the first slot
        image1.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front1 = myid;
        // display the name of the photo
        document.getElementById("name1").innerHTML = myalt;
        document.getElementById("name1").style.visibility = 'hidden';
        if(myfirst == lastLetter)
        {
            document.getElementById("result1").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result1").src = "photos/batsu.jpg";
            audioWrong.play();
        }

    }
    else if (image_front2 == 'blank')
    {
        // put the photo in the 2nd slot
        image2.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front2 = myid;
        document.getElementById("name2").innerHTML = myalt;
        document.getElementById("name2").style.visibility = 'hidden';
        var n1 = document.getElementById("name1").innerHTML;
        var n1Last = n1.charAt(n1.length-1);
        if(n1Last == myfirst)
        {
            document.getElementById("result2").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result2").src = "photos/batsu.jpg";
            audioWrong.play();
        }

    }
    else if (image_front3 == 'blank')
    {
        // put the photo in the 3rd slot
        image3.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front3 = myid;
        document.getElementById("name3").innerHTML = myalt;
        document.getElementById("name3").style.visibility = 'hidden';
        var n2 = document.getElementById("name2").innerHTML;
        var n2Last = n2.charAt(n2.length-1);
        // result fields
        var re1 = document.getElementById("result1").getAttribute("src");
        var re2 = document.getElementById("result2").getAttribute("src");
        if(n2Last == myfirst)
        {
            document.getElementById("result3").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result3").src = "photos/batsu.jpg";
            audioWrong.play();
        }
    }
    else if (image_front4 == 'blank')
    {
        // put the photo in the 3rd slot
        image4.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front4 = myid;
        document.getElementById("name4").innerHTML = myalt;
        document.getElementById("name4").style.visibility = 'hidden';
        var n3 = document.getElementById("name3").innerHTML;
        var n3Last = n3.charAt(n3.length-1);
        // result fields
        var re1 = document.getElementById("result1").getAttribute("src");
        var re2 = document.getElementById("result2").getAttribute("src");
        var re3 = document.getElementById("result3").getAttribute("src");
        if(n3Last == myfirst)
        {
            document.getElementById("result4").src = "photos/maru.jpg";

            if(re1=='photos/maru.jpg' && re2=='photos/maru.jpg' && re3=='photos/maru.jpg')
            {
                document.getElementById("Go4").style.visibility = 'visible';
                document.getElementById("doggy1").src="photos/goodJob.JPG";
                document.getElementById("name0").style.visibility = 'visible';
                document.getElementById("name1").style.visibility = 'visible';
                document.getElementById("name2").style.visibility = 'visible';
                document.getElementById("name3").style.visibility = 'visible';
                document.getElementById("name4").style.visibility = 'visible';
                audioAll.play();
            }
        }
        else
        {
            document.getElementById("result4").src = "photos/batsu.jpg";
            audioWrong.play();
        }
    }
}

function undo3(i)
{
    // get a slot#
    var photoid = document.getElementById(i).getAttribute("id");

    image1 = document.getElementById("animal1");
    image2 = document.getElementById("animal2");
    image3 = document.getElementById("animal3");
    image4 = document.getElementById("animal4");
    var im1src = image1.getAttribute("src");
    var im2src = image2.getAttribute("src");
    var im3src = image3.getAttribute("src");
    var im4src = image4.getAttribute("src");

    if (photoid == 'animal1')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front1).style.opacity = "1.0";
        // remove the photo from the top
        image1.src = 'photos/blank.jpg';
        image_front1 = 'blank';
        document.getElementById("name1").innerHTML = '';
        document.getElementById("result1").src = 'photos/blank.jpg';
        document.getElementById("Go4").style.visibility = 'hidden';
        document.getElementById("doggy1").src="photos/level3.JPG"
    }
    else if (photoid == 'animal2')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front2).style.opacity = "1.0";
        image2.src = 'photos/blank.jpg';
        image_front2 = 'blank';
        document.getElementById("name2").innerHTML = '';
        document.getElementById("result2").src = 'photos/blank.jpg';
        document.getElementById("Go4").style.visibility = 'hidden';
        document.getElementById("doggy1").src="photos/level3.JPG"
    }
    else if (photoid == 'animal3')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front3).style.opacity = "1.0";
        image3.src = 'photos/blank.jpg';
        image_front3 = 'blank';
        document.getElementById("name3").innerHTML = '';
        document.getElementById("result3").src = 'photos/blank.jpg';
        document.getElementById("Go4").style.visibility = 'hidden';
        document.getElementById("doggy1").src="photos/level3.JPG"
    }
    else if (photoid == 'animal4')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front4).style.opacity = "1.0";
        image4.src = 'photos/blank.jpg';
        image_front4 = 'blank';
        document.getElementById("name4").innerHTML = '';
        document.getElementById("result4").src = 'photos/blank.jpg';
        document.getElementById("Go4").style.visibility = 'hidden';
        document.getElementById("doggy1").src="photos/level3.JPG"
    }

}

function goLevel4()
{
    var x = Math.floor((Math.random() * 3) + 1);
    if (x==1)
    {
        window.location.href = "level41.html";
    }
    else if (x==2)
    {
        window.location.href = "level42.html";
    }
    else if (x==3)
    {
        window.location.href = "level43.html";
    }

}
function move4(i)
{
    // get an src of the photo clicked
    var mysrc = document.getElementById(i).getAttribute("src");
    var myid = document.getElementById(i).getAttribute("id");
    var myalt = document.getElementById(i).getAttribute("alt");
    var myfirst = myalt.charAt(0);
    // image sorce of the photos on the top
    image0 = document.getElementById("animal0");
    image1 = document.getElementById("animal1");
    image2 = document.getElementById("animal2");
    image3 = document.getElementById("animal3");
    image4 = document.getElementById("animal4");
    image5 = document.getElementById("animal5");
    var im0src = image0.getAttribute("src");
    var im1src = image1.getAttribute("src");
    var im2src = image2.getAttribute("src");
    var im3src = image3.getAttribute("src");
    var im4src = image4.getAttribute("src");
    var im5src = image5.getAttribute("src");
    var audioWrong = document.getElementById("audioW");
    var audiocorrect = document.getElementById("audioC");
    var audioAll = document.getElementById("allDone");
    if (image_front0 == 'blank')
    {
        // put the photo in the first slot
        image0.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front0 = myid;
        // display the name of the photo
        document.getElementById("name0").innerHTML = myalt;
        // hide until the end
        document.getElementById("name0").style.visibility = 'hidden';
    }
    else if (image_front1 == 'blank')
    {
        // put the photo in the first slot
        image1.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front1 = myid;
        // display the name of the photo
        document.getElementById("name1").innerHTML = myalt;
        document.getElementById("name1").style.visibility = 'hidden';
        var n0 = document.getElementById("name0").innerHTML;
        var n0Last = n0.charAt(n0.length-1);
        if(n0Last == myfirst)
        {
            document.getElementById("result1").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result1").src = "photos/batsu.jpg";
            audioWrong.play();
        }

    }
    else if (image_front2 == 'blank')
    {
        // put the photo in the 2nd slot
        image2.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front2 = myid;
        document.getElementById("name2").innerHTML = myalt;
        document.getElementById("name2").style.visibility = 'hidden';
        var n1 = document.getElementById("name1").innerHTML;
        var n1Last = n1.charAt(n1.length-1);
        if(n1Last == myfirst)
        {
            document.getElementById("result2").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result2").src = "photos/batsu.jpg";
            audioWrong.play();
        }

    }
    else if (image_front3 == 'blank')
    {
        // put the photo in the 3rd slot
        image3.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front3 = myid;
        document.getElementById("name3").innerHTML = myalt;
        document.getElementById("name3").style.visibility = 'hidden';
        var n2 = document.getElementById("name2").innerHTML;
        var n2Last = n2.charAt(n2.length-1);

        if(n2Last == myfirst)
        {
            document.getElementById("result3").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result3").src = "photos/batsu.jpg";
            audioWrong.play();
        }
    }
    else if (image_front4 == 'blank')
    {
        // put the photo in the 3rd slot
        image4.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front4 = myid;
        document.getElementById("name4").innerHTML = myalt;
        document.getElementById("name4").style.visibility = 'hidden';
        var n3 = document.getElementById("name3").innerHTML;
        var n3Last = n3.charAt(n3.length-1);

        if(n3Last == myfirst)
        {
            document.getElementById("result4").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result4").src = "photos/batsu.jpg";
            audioWrong.play();
        }
    }
    else if (image_front5 == 'blank')
    {
        // put the photo in the 3rd slot
        image5.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front5 = myid;
        document.getElementById("name5").innerHTML = myalt;
        document.getElementById("name5").style.visibility = 'hidden';
        var n4 = document.getElementById("name4").innerHTML;
        var n4Last = n4.charAt(n4.length-1);
        // result fields
        var re1 = document.getElementById("result1").getAttribute("src");
        var re2 = document.getElementById("result2").getAttribute("src");
        var re3 = document.getElementById("result3").getAttribute("src");
        var re4 = document.getElementById("result4").getAttribute("src");
        var re5 = document.getElementById("result5").getAttribute("src");
        if(n4Last == myfirst)
        {
            document.getElementById("result5").src = "photos/maru.jpg";

            if(re1=='photos/maru.jpg' && re2=='photos/maru.jpg' && re3=='photos/maru.jpg' && re4=='photos/maru.jpg')
            {
                document.getElementById("Go5").style.visibility = 'visible';
                document.getElementById("doggy1").src="photos/youAreGood.JPG";
                document.getElementById("name0").style.visibility = 'visible';
                document.getElementById("name1").style.visibility = 'visible';
                document.getElementById("name2").style.visibility = 'visible';
                document.getElementById("name3").style.visibility = 'visible';
                document.getElementById("name4").style.visibility = 'visible';
                document.getElementById("name5").style.visibility = 'visible';
                audioAll.play();
            }
        }
        else
        {
            document.getElementById("result5").src = "photos/batsu.jpg";
            audioWrong.play();
        }
    }
}

function undo4(i)
{
    // get a slot#
    var photoid = document.getElementById(i).getAttribute("id");
    image0 = document.getElementById("animal0");
    image1 = document.getElementById("animal1");
    image2 = document.getElementById("animal2");
    image3 = document.getElementById("animal3");
    image4 = document.getElementById("animal4");
    image5 = document.getElementById("animal5");
    var im0src = image0.getAttribute("src");
    var im1src = image1.getAttribute("src");
    var im2src = image2.getAttribute("src");
    var im3src = image3.getAttribute("src");
    var im4src = image4.getAttribute("src");
    var im5src = image5.getAttribute("src");

    if (photoid == 'animal0')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front0).style.opacity = "1.0";
        // remove the photo from the top
        image0.src = 'photos/blank.jpg';
        image_front0 = 'blank';
        document.getElementById("name0").innerHTML = '';
        document.getElementById("result0").src = 'photos/blank.jpg';
        document.getElementById("Go5").style.visibility = 'hidden';
        document.getElementById("doggy1").src="photos/level4.JPG"
    }
    if (photoid == 'animal1')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front1).style.opacity = "1.0";
        // remove the photo from the top
        image1.src = 'photos/blank.jpg';
        image_front1 = 'blank';
        document.getElementById("name1").innerHTML = '';
        document.getElementById("result1").src = 'photos/blank.jpg';
        document.getElementById("Go5").style.visibility = 'hidden';
        document.getElementById("doggy1").src="photos/level4.JPG"
    }
    else if (photoid == 'animal2')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front2).style.opacity = "1.0";
        image2.src = 'photos/blank.jpg';
        image_front2 = 'blank';
        document.getElementById("name2").innerHTML = '';
        document.getElementById("result2").src = 'photos/blank.jpg';
        document.getElementById("Go5").style.visibility = 'hidden';
        document.getElementById("doggy1").src="photos/level4.JPG";
    }
    else if (photoid == 'animal3')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front3).style.opacity = "1.0";
        image3.src = 'photos/blank.jpg';
        image_front3 = 'blank';
        document.getElementById("name3").innerHTML = '';
        document.getElementById("result3").src = 'photos/blank.jpg';
        document.getElementById("Go5").style.visibility = 'hidden';
        document.getElementById("doggy1").src="photos/level4.JPG"
    }
    else if (photoid == 'animal4')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front4).style.opacity = "1.0";
        image4.src = 'photos/blank.jpg';
        image_front4 = 'blank';
        document.getElementById("name4").innerHTML = '';
        document.getElementById("result4").src = 'photos/blank.jpg';
        document.getElementById("Go5").style.visibility = 'hidden';
        document.getElementById("doggy1").src="photos/level4.JPG"
    }
    else if (photoid == 'animal5')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front5).style.opacity = "1.0";
        image5.src = 'photos/blank.jpg';
        image_front5 = 'blank';
        document.getElementById("name5").innerHTML = '';
        document.getElementById("result5").src = 'photos/blank.jpg';
        document.getElementById("Go5").style.visibility = 'hidden';
        document.getElementById("doggy1").src="photos/level4.JPG"
    }


}

function goLevel5()
{
    var x = Math.floor((Math.random() * 3) + 1);
    if (x==1)
    {
        window.location.href = "level51.html";
    }
    else if (x==2)
    {
        window.location.href = "level52.html";
    }
    else if (x==3)
    {
        window.location.href = "level53.html";
    }

}

function move5(i)
{
    // get an src of the photo clicked
    var mysrc = document.getElementById(i).getAttribute("src");
    var myid = document.getElementById(i).getAttribute("id");
    var myalt = document.getElementById(i).getAttribute("alt");
    var myfirst = myalt.charAt(0);
    // image sorce of the photos on the top
    image0 = document.getElementById("animal0");
    image1 = document.getElementById("animal1");
    image2 = document.getElementById("animal2");
    image3 = document.getElementById("animal3");
    image4 = document.getElementById("animal4");
    image5 = document.getElementById("animal5");
    image6 = document.getElementById("animal6");
    var im0src = image0.getAttribute("src");
    var im1src = image1.getAttribute("src");
    var im2src = image2.getAttribute("src");
    var im3src = image3.getAttribute("src");
    var im4src = image4.getAttribute("src");
    var im5src = image5.getAttribute("src");
    var im5src = image6.getAttribute("src");
    var audioWrong = document.getElementById("audioW");
    var audiocorrect = document.getElementById("audioC");
    var audioClear = document.getElementById("audioClear");
    if (image_front0 == 'blank')
    {
        // put the photo in the first slot
        image0.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front0 = myid;
        // display the name of the photo
        document.getElementById("name0").innerHTML = myalt;
        // hide until the end
        document.getElementById("name0").style.visibility = 'hidden';
    }
    else if (image_front1 == 'blank')
    {
        // put the photo in the first slot
        image1.src = mysrc;
        // remove the photo from the hand
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front1 = myid;
        // display the name of the photo
        document.getElementById("name1").innerHTML = myalt;
        document.getElementById("name1").style.visibility = 'hidden';
        var n0 = document.getElementById("name0").innerHTML;
        var n0Last = n0.charAt(n0.length-1);
        if(n0Last == myfirst)
        {
            document.getElementById("result1").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result1").src = "photos/batsu.jpg";
            audioWrong.play();
        }

    }
    else if (image_front2 == 'blank')
    {
        // put the photo in the 2nd slot
        image2.src = mysrc;
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front2 = myid;
        document.getElementById("name2").innerHTML = myalt;
        document.getElementById("name2").style.visibility = 'hidden';
        var n1 = document.getElementById("name1").innerHTML;
        var n1Last = n1.charAt(n1.length-1);
        if(n1Last == myfirst)
        {
            document.getElementById("result2").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result2").src = "photos/batsu.jpg";
            audioWrong.play();
        }

    }
    else if (image_front3 == 'blank')
    {
        // put the photo in the 3rd slot
        image3.src = mysrc;
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front3 = myid;
        document.getElementById("name3").innerHTML = myalt;
        document.getElementById("name3").style.visibility = 'hidden';
        var n2 = document.getElementById("name2").innerHTML;
        var n2Last = n2.charAt(n2.length-1);

        if(n2Last == myfirst)
        {
            document.getElementById("result3").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result3").src = "photos/batsu.jpg";
            audioWrong.play();
        }
    }
    else if (image_front4 == 'blank')
    {
        // put the photo in the 3rd slot
        image4.src = mysrc;
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front4 = myid;
        document.getElementById("name4").innerHTML = myalt;
        document.getElementById("name4").style.visibility = 'hidden';
        var n3 = document.getElementById("name3").innerHTML;
        var n3Last = n3.charAt(n3.length-1);

        if(n3Last == myfirst)
        {
            document.getElementById("result4").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result4").src = "photos/batsu.jpg";
            audioWrong.play();
        }
    }
    else if (image_front5 == 'blank')
    {
        // put the photo in the 3rd slot
        image5.src = mysrc;
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front5 = myid;
        document.getElementById("name5").innerHTML = myalt;
        document.getElementById("name5").style.visibility = 'hidden';
        var n4 = document.getElementById("name4").innerHTML;
        var n4Last = n4.charAt(n4.length-1);
        // result fields
        var re1 = document.getElementById("result1").getAttribute("src");
        var re2 = document.getElementById("result2").getAttribute("src");
        var re3 = document.getElementById("result3").getAttribute("src");
        var re4 = document.getElementById("result4").getAttribute("src");
        var re5 = document.getElementById("result5").getAttribute("src");
        if(n4Last == myfirst)
        {
            document.getElementById("result5").src = "photos/maru.jpg";
            audiocorrect.play();
        }
        else
        {
            document.getElementById("result5").src = "photos/batsu.jpg";
            audioWrong.play();
        }
    }
    else if (image_front6 == 'blank')
    {
        // put the photo in the 3rd slot
        image6.src = mysrc;
        // make the chosen photo invisible
        document.getElementById(i).style.opacity = "0.0";
        image_front6 = myid;
        document.getElementById("name6").innerHTML = myalt;
        document.getElementById("name6").style.visibility = 'hidden';
        var n5 = document.getElementById("name5").innerHTML;
        var n5Last = n5.charAt(n5.length-1);
        // result fields
        var re1 = document.getElementById("result1").getAttribute("src");
        var re2 = document.getElementById("result2").getAttribute("src");
        var re3 = document.getElementById("result3").getAttribute("src");
        var re4 = document.getElementById("result4").getAttribute("src");
        var re5 = document.getElementById("result5").getAttribute("src");
        var re6 = document.getElementById("result6").getAttribute("src");
        if(n5Last == myfirst)
        {
            document.getElementById("result6").src = "photos/maru.jpg";
            audiocorrect.play();
            if(re1=='photos/maru.jpg' && re2=='photos/maru.jpg' && re3=='photos/maru.jpg' && re4=='photos/maru.jpg' && re5=='photos/maru.jpg')
            {
                document.getElementById("backHome").style.visibility = 'visible';
                document.getElementById("quit1").style.visibility = 'hidden';
                document.getElementById("name0").style.visibility = 'visible';
                document.getElementById("name1").style.visibility = 'visible';
                document.getElementById("name2").style.visibility = 'visible';
                document.getElementById("name3").style.visibility = 'visible';
                document.getElementById("name4").style.visibility = 'visible';
                document.getElementById("name5").style.visibility = 'visible';
                document.getElementById("name6").style.visibility = 'visible';
                window.open("Hurray.html", "_blank", "toolbar=no, scrollbars=no,resizable=no,width=600,height=600");
                audioClear.play();
            }
        }
        else
        {
            document.getElementById("result5").src = "photos/batsu.jpg";
        }
    }
}

function undo5(i)
{
    // get a slot#
    var photoid = document.getElementById(i).getAttribute("id");
    image0 = document.getElementById("animal0");
    image1 = document.getElementById("animal1");
    image2 = document.getElementById("animal2");
    image3 = document.getElementById("animal3");
    image4 = document.getElementById("animal4");
    image5 = document.getElementById("animal5");
    image6 = document.getElementById("animal6");
    var im0src = image0.getAttribute("src");
    var im1src = image1.getAttribute("src");
    var im2src = image2.getAttribute("src");
    var im3src = image3.getAttribute("src");
    var im4src = image4.getAttribute("src");
    var im5src = image5.getAttribute("src");
    var im6src = image6.getAttribute("src");


    if (photoid == 'animal0')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front0).style.opacity = "1.0";
        // remove the photo from the top
        image0.src = 'photos/blank.jpg';
        image_front0 = 'blank';
        document.getElementById("name0").innerHTML = '';
        document.getElementById("result0").src = 'photos/blank.jpg';
        document.getElementById("backHome").style.visibility = 'hidden';
        document.getElementById("doggy1").src="photos/level5.JPG"
    }
    if (photoid == 'animal1')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front1).style.opacity = "1.0";
        // remove the photo from the top
        image1.src = 'photos/blank.jpg';
        image_front1 = 'blank';
        document.getElementById("name1").innerHTML = '';
        document.getElementById("result1").src = 'photos/blank.jpg';
        document.getElementById("backHome").style.visibility = 'hidden';
        document.getElementById("doggy1").src="photos/level5.JPG"
    }
    else if (photoid == 'animal2')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front2).style.opacity = "1.0";
        image2.src = 'photos/blank.jpg';
        image_front2 = 'blank';
        document.getElementById("name2").innerHTML = '';
        document.getElementById("result2").src = 'photos/blank.jpg';
        document.getElementById("backHome").style.visibility = 'hidden';
        document.getElementById("doggy1").src="photos/level5.JPG";
    }
    else if (photoid == 'animal3')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front3).style.opacity = "1.0";
        image3.src = 'photos/blank.jpg';
        image_front3 = 'blank';
        document.getElementById("name3").innerHTML = '';
        document.getElementById("result3").src = 'photos/blank.jpg';
        document.getElementById("backHome").style.visibility = 'hidden';
        document.getElementById("doggy").src="photos/level5.JPG"
    }
    else if (photoid == 'animal4')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front4).style.opacity = "1.0";
        image4.src = 'photos/blank.jpg';
        image_front4 = 'blank';
        document.getElementById("name4").innerHTML = '';
        document.getElementById("result4").src = 'photos/blank.jpg';
        document.getElementById("backHome").style.visibility = 'hidden';
        document.getElementById("doggy1").src="photos/level5.JPG"
    }
    else if (photoid == 'animal5')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front5).style.opacity = "1.0";
        image5.src = 'photos/blank.jpg';
        image_front5 = 'blank';
        document.getElementById("name5").innerHTML = '';
        document.getElementById("result5").src = 'photos/blank.jpg';
        document.getElementById("backHome").style.visibility = 'hidden';
        document.getElementById("doggy1").src="photos/level5.JPG"
    }
    else if (photoid == 'animal6')
    {
        // return the photo to hand (=make it visible)
        document.getElementById(image_front6).style.opacity = "1.0";
        image6.src = 'photos/blank.jpg';
        image_front6 = 'blank';
        document.getElementById("name6").innerHTML = '';
        document.getElementById("result6").src = 'photos/blank.jpg';
        document.getElementById("backHome").style.visibility = 'hidden';
        document.getElementById("doggy1").src="photos/level5.JPG"
    }

}

function howTo()
{
    window.open("instruction.html", "_blank", "toolbar=no, scrollbars=yes,resizable=yes,width=1000,height=500");
}
