<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Slade Keller | Web Developer</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    
    <!-- Custom css -->
    <link href="main.css" rel="stylesheet">

    <!-- javascript -->
    <script src="main.js"></script>
    
    <!-- Font Awesome -->
    <script src="https://use.fontawesome.com/b2db8724ce.js"></script>

    <!-- GOOGLE FONTS -->
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">

  </head>

  <body>

  <nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"><i class="fa fa-arrow-up" aria-hidden="true"></i> Top</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
       <ul class="nav navbar-nav navbar-right">
        <li class="jquery-about"><a href="#"><i class="fa fa-address-card" aria-hidden="true"></i> About Me</a></li>
        <li><a href="#"><i class="fa fa-pencil" aria-hidden="true"></i> Contact</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

    <div class="site-wrapper">

      <div class="site-wrapper-inner">

        <div class="cover-container">
        
         

      <div class="cover-container">
          <div class="inner cover behind">
            <br><br>
            <a href="#"><img class="img-circle" src="http://i.imgur.com/TKGJ7va.png" alt="Its a picture of me!"></a>
            <h1 class="color-change">Hi, I'm Slade. I build and design websites.</h1>
            <p class="lead color-change">I'm proficient in HTML, CSS, Javascript, and multiple frameworks. If you need a web developer, I am your guy!</p>
            <p class="lead">
              <a class="btn btn-lg btn-default jquery-learn">Learn more</a>
            </p>
            <br><br>
          </div>

          

        </div>

      </div>

    </div>
  </div>

<div class="about-me-out">
  <div class="container about-me-in">
    <br><br>
    <h2><i class="fa fa-code" aria-hidden="true"></i> About Me <i class="fa fa-code" aria-hidden="true"></i></h2>
    <hr class="hr-aboutme">
    <h4>Here are some websites I have created...</h4>
      <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-6">
      <div class="thumbnail">
        <img src="https://source.unsplash.com/IE_sifhay7o">
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6">
      <div class="thumbnail">
        <img src="https://source.unsplash.com/zshyCr6HGw0">
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-6">
      <div class="thumbnail">
        <img src="https://source.unsplash.com/zshyCr6HGw0">
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-6">
      <div class="thumbnail">
        <img src="https://source.unsplash.com/zshyCr6HGw0">
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-6">
      <div class="thumbnail">
        <img src="https://source.unsplash.com/zshyCr6HGw0">
      </div>
    </div>
      </div>

      <hr class="hr-divide">
      
      <h2><i class="fa fa-code" aria-hidden="true"></i> Contact <i class="fa fa-code" aria-hidden="true"></i></h2>

  </div>



</div>


  <div id="footer-above">
    <div>
      <p><b>About this page</b></p>
      <p id="made-with">Made with <i class="fa fa-code" aria-hidden="true"></i> and <i class="fa fa-fw fa-music"></i><br/>by<span class="slade"> Slade Keller</span>.</p>
    </div>
    <div>
      <p><b>Around the Web</b></p>
      <div id="icons">
        <ul>
          <li><a class="button social" href="https://www.linkedin.com/in/slade-keller-63aa20b9/" target="_blank"><i class="fa fa-fw fa-linkedin"></i></a></li>
          <li><a class="button social" href="https://github.com/Veosyn" target="_blank"><i class="fa fa-fw fa-github"></i></a></li>
          <li><a class="button social" href="https://codepen.io/Veosyn/" target="_blank"><i class="fa fa-codepen" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
  </div>



<div class="footer">
  Made by Slade © 2018. All Rights Reserved
</div>
    


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    
    <script type="text/javascript">
      

               // About Me Button
      $(".jquery-about").click(function() {
        $('html, body').animate({
        scrollTop: $(".about-me-out").offset().top
          }, 2000);
      });

              // Learn More Button
      $(".jquery-learn").click(function() {
        $('html, body').animate({
        scrollTop: $(".about-me-out").offset().top
          }, 2000);
      });

      
    </script>

  </body>
</html>

