import { IterableDiffers, Directive, EventEmitter, Output, Input } from '@angular/core';
export class ngfFormData {
    constructor(IterableDiffers) {
        this.postName = "file";
        this.FormData = new FormData();
        this.FormDataChange = new EventEmitter();
        this.differ = IterableDiffers.find([]).create();
    }
    ngDoCheck() {
        var changes = this.differ.diff(this.files);
        if (changes) {
            setTimeout(() => this.buildFormData(), 0);
        }
    }
    buildFormData() {
        const isArray = typeof (this.files) === 'object' && this.files.constructor === Array;
        if (isArray) {
            this.FormData = new FormData();
            const files = this.files || [];
            files.forEach(file => this.FormData.append(this.postName, file, this.fileName || file.name));
            this.FormDataChange.emit(this.FormData);
        }
        else {
            delete this.FormData;
        }
    }
}
ngfFormData.decorators = [
    { type: Directive, args: [{ selector: 'ngfFormData' },] }
];
ngfFormData.ctorParameters = () => [
    { type: IterableDiffers }
];
ngfFormData.propDecorators = {
    files: [{ type: Input }],
    postName: [{ type: Input }],
    fileName: [{ type: Input }],
    FormData: [{ type: Input }],
    FormDataChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdmRm9ybURhdGEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hY2tlcmFwcGxlL1Byb2plY3RzL3dlYi9hbmd1bGFyL2FuZ3VsYXItZmlsZS9kZXZlbG9wbWVudC9wcm9qZWN0cy9hbmd1bGFyLWZpbGUvc3JjLyIsInNvdXJjZXMiOlsiZmlsZS11cGxvYWQvbmdmRm9ybURhdGEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxlQUFlLEVBQ2YsU0FBUyxFQUFFLFlBQVksRUFDdkIsTUFBTSxFQUFFLEtBQUssRUFDZCxNQUFNLGVBQWUsQ0FBQztBQUd2QixNQUFNLE9BQU8sV0FBVztJQVV0QixZQUFZLGVBQWdDO1FBUm5DLGFBQVEsR0FBVSxNQUFNLENBQUE7UUFHeEIsYUFBUSxHQUFZLElBQUksUUFBUSxFQUFFLENBQUE7UUFDakMsbUJBQWMsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUtsRSxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDakQsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7UUFFN0MsSUFBSSxPQUFPLEVBQUU7WUFDWCxVQUFVLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELGFBQWE7UUFDWCxNQUFNLE9BQU8sR0FBRyxPQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsS0FBRyxLQUFLLENBQUE7UUFFL0UsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUE7WUFDOUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUE7WUFDOUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUEsRUFBRSxDQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDcEUsQ0FBQTtZQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUUsQ0FBQTtTQUMxQzthQUFJO1lBQ0gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO1NBQ3JCO0lBQ0gsQ0FBQzs7O1lBcENGLFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUM7OztZQUxsQyxlQUFlOzs7b0JBT2QsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBRUwsS0FBSzs2QkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSXRlcmFibGVEaWZmZXIsXG4gIEl0ZXJhYmxlRGlmZmVycyxcbiAgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCwgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmdmRm9ybURhdGEnfSlcbmV4cG9ydCBjbGFzcyBuZ2ZGb3JtRGF0YSB7XG4gIEBJbnB1dCgpIGZpbGVzICE6IEZpbGVbXVxuICBASW5wdXQoKSBwb3N0TmFtZTpzdHJpbmcgPSBcImZpbGVcIlxuICBASW5wdXQoKSBmaWxlTmFtZSAhOiBzdHJpbmcvL2ZvcmNlIGZpbGUgbmFtZVxuXG4gIEBJbnB1dCgpIEZvcm1EYXRhOkZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgQE91dHB1dCgpIEZvcm1EYXRhQ2hhbmdlOkV2ZW50RW1pdHRlcjxGb3JtRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBkaWZmZXI6SXRlcmFibGVEaWZmZXI8e30+XG5cbiAgY29uc3RydWN0b3IoSXRlcmFibGVEaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMpe1xuICAgIHRoaXMuZGlmZmVyID0gSXRlcmFibGVEaWZmZXJzLmZpbmQoW10pLmNyZWF0ZSgpXG4gIH1cblxuICBuZ0RvQ2hlY2soKXtcbiAgICB2YXIgY2hhbmdlcyA9IHRoaXMuZGlmZmVyLmRpZmYoIHRoaXMuZmlsZXMgKTtcblxuICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpPT50aGlzLmJ1aWxkRm9ybURhdGEoKSwgMClcbiAgICB9XG4gIH1cblxuICBidWlsZEZvcm1EYXRhKCl7XG4gICAgY29uc3QgaXNBcnJheSA9IHR5cGVvZih0aGlzLmZpbGVzKT09PSdvYmplY3QnICYmIHRoaXMuZmlsZXMuY29uc3RydWN0b3I9PT1BcnJheVxuXG4gICAgaWYoIGlzQXJyYXkgKXtcbiAgICAgIHRoaXMuRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzIHx8IFtdXG4gICAgICBmaWxlcy5mb3JFYWNoKGZpbGU9PlxuICAgICAgICB0aGlzLkZvcm1EYXRhLmFwcGVuZCh0aGlzLnBvc3ROYW1lLCBmaWxlLCB0aGlzLmZpbGVOYW1lfHxmaWxlLm5hbWUpXG4gICAgICApXG4gICAgICB0aGlzLkZvcm1EYXRhQ2hhbmdlLmVtaXQoIHRoaXMuRm9ybURhdGEgKVxuICAgIH1lbHNle1xuICAgICAgZGVsZXRlIHRoaXMuRm9ybURhdGFcbiAgICB9XG4gIH1cbn0iXX0=