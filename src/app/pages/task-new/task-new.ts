import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from '../../services/tasks';
import type { NewTask } from '../../models/task.model';


@Component({
  selector: 'app-task-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-new.html',
  styleUrl: './task-new.css',
})
export class TaskNew {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tasks: TasksService,
    private router: Router
  ) {
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: [''],
      completada: [false],
    });
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const data: NewTask = {
    titulo: String(this.form.value.titulo ?? '').trim(),
    descripcion: this.form.value.descripcion ?? undefined,
    completada: Boolean(this.form.value.completada),
  };

  this.tasks.add(data);
  this.router.navigateByUrl('/tareas');
  }

  cancel() {
    this.router.navigateByUrl('/tareas');
  }
}
