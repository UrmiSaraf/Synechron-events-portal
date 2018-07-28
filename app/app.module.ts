import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

//Components
import { AppComponent } from "./app.component";
import { EmployeesListComponent } from "./employees/components/employees-list.component";
import { EmployeeDetailsComponent } from "./employees/components/employee-details.component";
import { EventsListComponent } from "./events/components/events-list.components";
import { EventDetailsComponent } from "./events/components/event-details.component";
import { JphPostsListComponent} from "./jph/components/jph-posts-list.component"


//Pipes
import {FirstLetterCapitalPipe} from "./events/pipes/first-letter-capital.pipe";
import {FilterByPipe} from "./events/pipes/filter-by.pipe";

//Services
import { SepEventsService } from "./events/services/sep-events.service";
import { JphService } from "./jph/services/jph.service";

@NgModule({
    imports: [BrowserModule, FormsModule,HttpClientModule],
    exports: [],
    declarations: [
        AppComponent, 
        EmployeesListComponent, 
        EmployeeDetailsComponent,
        EventsListComponent,
        EventDetailsComponent,
        JphPostsListComponent,
        FirstLetterCapitalPipe,
        FilterByPipe
        
    ],
    providers: [SepEventsService, JphService],
    bootstrap: [AppComponent]
})
export class AppModule {

}