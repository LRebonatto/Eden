import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/services/auth.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-modal-select-branch',
  templateUrl: './modal-select-branch.component.html',
  styleUrls: ['./modal-select-branch.component.css']
})
export class ModalSelectBranchComponent implements OnInit {

  branches = []
  branchSelected
  constructor(
    private authService: AuthService,
    private globalService: GlobalService,
    public dialogRef: MatDialogRef<ModalSelectBranchComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.branches = this.data
    console.log(this.branches)
  }

  selectBranch(){
    this.dialogRef.close(this.branchSelected);
  }

  changeBranch(branch){
    console.log(branch._value)
    this.authService.setBranch(branch._value[0].id)
    window.localStorage.setItem(this.globalService.encryptString('branchName'), (branch._value[0].name))
    window.location.reload();
  }

}
