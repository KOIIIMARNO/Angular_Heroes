import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './entities/components/main/main.component';
import { TableComponent } from './entities/components/table/table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { PipfilPipe } from './entities/pipes/custom-filter-pipe.pipe';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TableComponent,
    PipfilPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTableModule,
    MatExpansionModule,
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
