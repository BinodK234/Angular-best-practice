import { Routes } from '@angular/router';
import { TakeOperator } from './RXJS/take-operator/take-operator';
import { SubjectComponent } from './RXJS/subject/subject';
import { ObservablesComponent }  from './RXJS/observables/observables';
import { ParentComponent } from './component-communication/parent-component/parent-component';
import { TemplateForms } from './forms/template-forms/template-forms'

export const routes: Routes = [
    {path: 'take', component: TakeOperator},
    {path: 'subject', component: SubjectComponent},
    {path: 'observables', component: ObservablesComponent},
    {path: 'component-communication', component: ParentComponent},
    {path: 'template-forms', component: TemplateForms}
];
