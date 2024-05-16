$(document).ready(function () {
  openForm();
  closeForm();
});

function openForm() {
  const formTypes = [
    {
      fields: [".cpf", ".email", ".phone", ".name", ".address"],
      specificFields: [],
    },
    {
      fields: [".cnpj", ".fantasy-name", ".phone", ".name", ".address"],
      specificFields: [],
    },
    {
      fields: [
        ".cpf",
        ".email",
        ".phone",
        ".name",
        ".address",
        ".study",
        ".teach",
      ],
      specificFields: [],
    },
    {
      fields: [
        ".cnpj",
        ".fantasy-name",
        ".phone",
        ".name",
        ".address",
        ".login",
        ".password",
      ],
      specificFields: [],
    },
    {
      fields: [".cpf", ".email", ".phone", ".name", ".address", ".id"],
      specificFields: [],
    },
  ];

  const openForms = $(".js-open-form");
  const form = $(".js-form");
  const layer = $(".js-layer");

  function showFields(fields) {
    form.addClass("active");
    layer.addClass("active");
    $(".form__wrapper label, .form__wrapper input").hide();
    fields.forEach((field) => $(field).find("label, input").show());
  }

  openForms.each(function (index) {
    $(this).on("click", function () {
      const currentFormType = formTypes[index];
      showFields(currentFormType.fields.concat(currentFormType.specificFields));
    });
  });
}

function closeForm() {
  $(".js-close-form").on("click", function () {
    $(".js-form").removeClass("active");
    $(".js-layer").removeClass("active");
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      $(".js-form").removeClass("active");
      $(".js-layer").removeClass("active");
    }
  });
}
