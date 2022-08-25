import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { __values } from "tslib";

declare var $: any;

@Component({
  selector: "app-sweetalert",
  templateUrl: "./sweetalert.component.html",
  styleUrls: ["./sweetalert.component.css"],
})
export class SweetalertComponent {
  showSwal(type, title = "", text = "") {
    if (type == "basic") {
      Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
    } else if (type == "saved") {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (type == "custom-image") {
      Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    } else if (type == "failed") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      }).catch();
    } else if (type == "confirm") {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        })
        .catch();
    }
  }
}
