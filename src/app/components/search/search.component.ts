import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, distinctUntilChanged, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-search',
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  buscaControl = new FormControl(''); 
  resultados$!: Observable<string[]>;

  ngOnInit(): void {
    this.resultados$ = this.buscaControl.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(term => this.searchForCourse(term ?? ''))
);
  }

  public searchForCourse(value: string): Observable<string[]> {
    const courseList = ['Angular', 'Signals', 'Rxjs'];

    const finalResults = courseList.filter((term) => term.toLowerCase().includes(value.toLowerCase()))

    return of(finalResults).pipe(delay(1000))
  }
}
