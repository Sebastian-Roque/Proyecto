import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluationService } from '../../services/evaluation.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.page.html',
  styleUrls: ['./add-place.page.scss'],
})
export class AddPlacePage implements OnInit {
  placeName: string = '';
  latitude: number = 0;
  longitude: number = 0;
  comment: string = '';
  photo: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(forwardRef(() => EvaluationService)) private evaluationService: EvaluationService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.latitude = params['lat'] || 0;
      this.longitude = params['lng'] || 0;
    });
  }

  uploadPhoto() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.photo = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    input.click();
  }

  async savePlace() {
    if (!this.placeName.trim() || !this.comment.trim()) {
      alert('Por favor, completa todos los campos antes de guardar.');
      return;
    }

    const placeData = {
      name: this.placeName,
      latitude: this.latitude,
      longitude: this.longitude,
      comment: this.comment,
      photo: this.photo,
    };

    try {
      await this.evaluationService.addEvaluation(placeData);
      alert('Lugar guardado exitosamente.');
      this.router.navigate(['/evaluations']);
    } catch (error) {
      console.error('Error al guardar el lugar:', error);
      alert('Ocurrió un error al guardar el lugar.');
    }
  }
}
