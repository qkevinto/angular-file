export var isFileInput = function (elm) {
    var ty = elm.getAttribute('type');
    return elm.tagName.toLowerCase() === 'input' && ty && ty.toLowerCase() === 'file';
};
var initialTouchStartY = 0;
var initialTouchStartX = 0;
export var detectSwipe = function (evt) {
    var touches = evt.changedTouches || (evt.originalEvent && evt.originalEvent.changedTouches);
    if (touches) {
        if (evt.type === 'touchstart') {
            initialTouchStartX = touches[0].clientX;
            initialTouchStartY = touches[0].clientY;
            return true; // don't block event default
        }
        else {
            // prevent scroll from triggering event
            if (evt.type === 'touchend') {
                var currentX = touches[0].clientX;
                var currentY = touches[0].clientY;
                if ((Math.abs(currentX - initialTouchStartX) > 20) ||
                    (Math.abs(currentY - initialTouchStartY) > 20)) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    return false;
                }
            }
            return true;
        }
    }
    return false;
};
export var createInvisibleFileInputWrap = function () {
    var fileElem = createFileInput();
    var label = document.createElement('label');
    label.innerHTML = 'upload';
    label.style.visibility = 'hidden';
    label.style.position = 'absolute';
    label.style.overflow = 'hidden';
    label.style.width = '0px';
    label.style.height = '0px';
    label.style.border = 'none';
    label.style.margin = '0px';
    label.style.padding = '0px';
    label.setAttribute('tabindex', '-1');
    //bindAttrToFileInput(fileElem, label);
    //generatedElems.push({el: elem, ref: label});
    label.appendChild(fileElem);
    //document.body.appendChild( label );
    return label;
};
export var createFileInput = function () {
    var fileElem = document.createElement('input');
    fileElem.type = "file";
    return fileElem;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jLWV2ZW50LWhlbHAuZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1maWxlLyIsInNvdXJjZXMiOlsiZmlsZS11cGxvYWQvZG9jLWV2ZW50LWhlbHAuZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRyxVQUFTLEdBQU87SUFDekMsSUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNuQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxDQUFDO0FBQ3BGLENBQUMsQ0FBQTtBQUVELElBQUksa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLElBQUksa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRyxVQUFTLEdBQU87SUFDekMsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUksR0FBRyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1RixJQUFJLE9BQU8sRUFBRTtRQUNYLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7WUFDN0Isa0JBQWtCLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUN4QyxrQkFBa0IsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3hDLE9BQU8sSUFBSSxDQUFDLENBQUMsNEJBQTRCO1NBQzFDO2FBQU07WUFDTCx1Q0FBdUM7WUFDdkMsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtnQkFDM0IsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQkFDbEMsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNoRCxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUU7b0JBQ2hELEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDdEIsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNyQixPQUFPLEtBQUssQ0FBQztpQkFDZDthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUE7QUFDZCxDQUFDLENBQUE7QUFFRCxNQUFNLENBQUMsSUFBTSw0QkFBNEIsR0FBRztJQUMxQyxJQUFJLFFBQVEsR0FBRyxlQUFlLEVBQUUsQ0FBQTtJQUNoQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO0lBQzFCLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQTtJQUNqQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUE7SUFDakMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0lBQy9CLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUN6QixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDMUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQzNCLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7SUFDM0IsS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFFbkMsdUNBQXVDO0lBQ3ZDLDhDQUE4QztJQUU5QyxLQUFLLENBQUMsV0FBVyxDQUFFLFFBQVEsQ0FBRSxDQUFBO0lBQzdCLHFDQUFxQztJQUVyQyxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQTtBQUVELE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBRztJQUM3QixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLFFBQVEsQ0FBQyxJQUFJLEdBQUMsTUFBTSxDQUFBO0lBQ3BCLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpc0ZpbGVJbnB1dCA9IGZ1bmN0aW9uKGVsbTphbnkpe1xyXG4gIGNvbnN0IHR5ID0gZWxtLmdldEF0dHJpYnV0ZSgndHlwZScpXHJcbiAgcmV0dXJuIGVsbS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcgJiYgdHkgJiYgdHkudG9Mb3dlckNhc2UoKSA9PT0gJ2ZpbGUnO1xyXG59XHJcblxyXG5sZXQgaW5pdGlhbFRvdWNoU3RhcnRZID0gMDtcclxubGV0IGluaXRpYWxUb3VjaFN0YXJ0WCA9IDA7XHJcbmV4cG9ydCBjb25zdCBkZXRlY3RTd2lwZSA9IGZ1bmN0aW9uKGV2dDphbnkpOmJvb2xlYW4ge1xyXG4gIHZhciB0b3VjaGVzID0gZXZ0LmNoYW5nZWRUb3VjaGVzIHx8IChldnQub3JpZ2luYWxFdmVudCAmJiBldnQub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlcyk7XHJcbiAgaWYgKHRvdWNoZXMpIHtcclxuICAgIGlmIChldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XHJcbiAgICAgIGluaXRpYWxUb3VjaFN0YXJ0WCA9IHRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgaW5pdGlhbFRvdWNoU3RhcnRZID0gdG91Y2hlc1swXS5jbGllbnRZO1xyXG4gICAgICByZXR1cm4gdHJ1ZTsgLy8gZG9uJ3QgYmxvY2sgZXZlbnQgZGVmYXVsdFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gcHJldmVudCBzY3JvbGwgZnJvbSB0cmlnZ2VyaW5nIGV2ZW50XHJcbiAgICAgIGlmIChldnQudHlwZSA9PT0gJ3RvdWNoZW5kJykge1xyXG4gICAgICAgIHZhciBjdXJyZW50WCA9IHRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICB2YXIgY3VycmVudFkgPSB0b3VjaGVzWzBdLmNsaWVudFk7XHJcbiAgICAgICAgaWYgKChNYXRoLmFicyhjdXJyZW50WCAtIGluaXRpYWxUb3VjaFN0YXJ0WCkgPiAyMCkgfHxcclxuICAgICAgICAgIChNYXRoLmFicyhjdXJyZW50WSAtIGluaXRpYWxUb3VjaFN0YXJ0WSkgPiAyMCkpIHtcclxuICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVJbnZpc2libGVGaWxlSW5wdXRXcmFwID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGZpbGVFbGVtID0gY3JlYXRlRmlsZUlucHV0KClcclxuICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGxhYmVsLmlubmVySFRNTCA9ICd1cGxvYWQnXHJcbiAgbGFiZWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgbGFiZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgbGFiZWwuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG4gIGxhYmVsLnN0eWxlLndpZHRoID0gJzBweCdcclxuICBsYWJlbC5zdHlsZS5oZWlnaHQgPSAnMHB4J1xyXG4gIGxhYmVsLnN0eWxlLmJvcmRlciA9ICdub25lJ1xyXG4gIGxhYmVsLnN0eWxlLm1hcmdpbiA9ICcwcHgnXHJcbiAgbGFiZWwuc3R5bGUucGFkZGluZyA9ICcwcHgnXHJcbiAgbGFiZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsJy0xJylcclxuICBcclxuICAvL2JpbmRBdHRyVG9GaWxlSW5wdXQoZmlsZUVsZW0sIGxhYmVsKTtcclxuICAvL2dlbmVyYXRlZEVsZW1zLnB1c2goe2VsOiBlbGVtLCByZWY6IGxhYmVsfSk7XHJcblxyXG4gIGxhYmVsLmFwcGVuZENoaWxkKCBmaWxlRWxlbSApXHJcbiAgLy9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBsYWJlbCApO1xyXG5cclxuICByZXR1cm4gbGFiZWw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVGaWxlSW5wdXQgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgZmlsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGZpbGVFbGVtLnR5cGU9XCJmaWxlXCJcclxuICByZXR1cm4gZmlsZUVsZW07XHJcbn0iXX0=