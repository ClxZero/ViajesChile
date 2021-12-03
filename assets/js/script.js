$(function () {
  $("a").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(gato).offset().top
        },
        800,
        function () {
          window.location.hash = gato;
        }
      );
    }
  });

  $('[data-toggle="tooltip"]').tooltip();
});


function envia() {
  alert("Pronto nos pondremos en contacto contigo, te recomiendo mantenerte hidratado hasta entonces.");
};

function enviaRRSS() {
  alert("Unos monitos estan trabajando en nuestras redes sociales de momento");
};

function enviaRRSSALT() {
  alert("COMO TE EXPLICO QUE NO FUNCIONAAAA AAAAAAAAAAAAAAAAAA");
};