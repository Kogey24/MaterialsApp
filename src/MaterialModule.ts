import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete"

@NgModule({
    exports:[
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatAutocompleteModule
    ]
    })

export class MaterialModule{}