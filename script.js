<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kanna S - Portfolio</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
        }
        .jumbotron {
            background-color: #343a40;
            color: #fff;
            padding: 100px 25px;
            text-align: center;
        }
        .section-heading {
            margin-top: 40px;
            margin-bottom: 20px;
        }
        .project {
            margin-bottom: 30px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="jumbotron">
            <h1 class="display-4">Kanna S</h1>
            <p class="lead">Fresher | No Experience | Aspiring Data Scientist</p>
        </div>
        <section id="about">
            <h2 class="section-heading">About Me</h2>
            <p>I am a fresher with a keen interest in data science and problem-solving. Although I do not have experience in programming languages like Python, Java, R, MATLAB, or Verilog, I possess strong communication and problem-solving skills.</p>
        </section>
        <section id="projects">
            <h2 class="section-heading">Projects</h2>
            <div class="project">
                <h3>Home Automation Using Hand Gestures</h3>
                <p>A project demonstrating the control of home appliances using hand gestures.</p>
            </div>
            <div class="project">
                <h3>COVID Analysis Project</h3>
                <p>An analysis project focusing on understanding trends and patterns related to COVID-19.</p>
            </div>
            <div class="project">
                <h3>Curved Microstrip Patch Antenna</h3>
                <p>Designed a curved microstrip patch antenna using transparent conductive films.</p>
            </div>
            <div class="project">
                <h3>Simple Inventory Management</h3>
                <p>Implemented a basic inventory management system.</p>
            </div>
        </section>
        <section id="certifications">
            <h2 class="section-heading">Certifications</h2>
            <p>Certified in Data Science course</p>
        </section>
        <section id="current">
            <h2 class="section-heading">Currently Pursuing</h2>
            <p>Data Science course at Capabl to become a Data Scientist</p>
        </section>
    </div>

    <!-- Bootstrap JS and custom JavaScript -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        // Smooth scrolling using jQuery
        $(document).ready(function(){
            // Add smooth scrolling to all links
            $("a").on('click', function(event) {
                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();
                    // Store hash
                    var hash = this.hash;
                    // Using jQuery's animate() method to add smooth page scroll
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function(){
                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                } // End if
            });
        });
    </script>
</body>
</html>
