export const isFileInput = function (elm) {
    const ty = elm.getAttribute('type');
    return elm.tagName.toLowerCase() === 'input' && ty && ty.toLowerCase() === 'file';
};
let initialTouchStartY = 0;
let initialTouchStartX = 0;
export const detectSwipe = function (evt) {
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
                    if (evt.cancelable) {
                        evt.preventDefault();
                    }
                    return false;
                }
            }
            return true;
        }
    }
    return false;
};
export const createInvisibleFileInputWrap = function () {
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
export const createFileInput = function () {
    var fileElem = document.createElement('input');
    fileElem.type = "file";
    return fileElem;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jLWV2ZW50LWhlbHAuZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ZpbGUtdXBsb2FkL2RvYy1ldmVudC1oZWxwLmZ1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsVUFBUyxHQUFPO0lBQ3pDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDbkMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU0sQ0FBQztBQUNwRixDQUFDLENBQUE7QUFFRCxJQUFJLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUMzQixJQUFJLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUMzQixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsVUFBUyxHQUFPO0lBQ3pDLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxjQUFjLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLEdBQUcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUYsSUFBSSxPQUFPLEVBQUU7UUFDWCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO1lBQzdCLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDeEMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUN4QyxPQUFPLElBQUksQ0FBQyxDQUFDLDRCQUE0QjtTQUMxQzthQUFNO1lBQ0wsdUNBQXVDO1lBQ3ZDLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7Z0JBQzNCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQ2xDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDaEQsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFO29CQUNoRCxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3RCLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRTt3QkFDbEIsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO3FCQUN0QjtvQkFDRCxPQUFPLEtBQUssQ0FBQztpQkFDZDthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUE7QUFDZCxDQUFDLENBQUE7QUFFRCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRztJQUMxQyxJQUFJLFFBQVEsR0FBRyxlQUFlLEVBQUUsQ0FBQTtJQUNoQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO0lBQzFCLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQTtJQUNqQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUE7SUFDakMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0lBQy9CLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUN6QixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDMUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQzNCLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7SUFDM0IsS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFFbkMsdUNBQXVDO0lBQ3ZDLDhDQUE4QztJQUU5QyxLQUFLLENBQUMsV0FBVyxDQUFFLFFBQVEsQ0FBRSxDQUFBO0lBQzdCLHFDQUFxQztJQUVyQyxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQTtBQUVELE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRztJQUM3QixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLFFBQVEsQ0FBQyxJQUFJLEdBQUMsTUFBTSxDQUFBO0lBQ3BCLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpc0ZpbGVJbnB1dCA9IGZ1bmN0aW9uKGVsbTphbnkpe1xuICBjb25zdCB0eSA9IGVsbS5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuICByZXR1cm4gZWxtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JyAmJiB0eSAmJiB0eS50b0xvd2VyQ2FzZSgpID09PSAnZmlsZSc7XG59XG5cbmxldCBpbml0aWFsVG91Y2hTdGFydFkgPSAwO1xubGV0IGluaXRpYWxUb3VjaFN0YXJ0WCA9IDA7XG5leHBvcnQgY29uc3QgZGV0ZWN0U3dpcGUgPSBmdW5jdGlvbihldnQ6YW55KTpib29sZWFuIHtcbiAgdmFyIHRvdWNoZXMgPSBldnQuY2hhbmdlZFRvdWNoZXMgfHwgKGV2dC5vcmlnaW5hbEV2ZW50ICYmIGV2dC5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzKTtcbiAgaWYgKHRvdWNoZXMpIHtcbiAgICBpZiAoZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgaW5pdGlhbFRvdWNoU3RhcnRYID0gdG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgaW5pdGlhbFRvdWNoU3RhcnRZID0gdG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgcmV0dXJuIHRydWU7IC8vIGRvbid0IGJsb2NrIGV2ZW50IGRlZmF1bHRcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcHJldmVudCBzY3JvbGwgZnJvbSB0cmlnZ2VyaW5nIGV2ZW50XG4gICAgICBpZiAoZXZ0LnR5cGUgPT09ICd0b3VjaGVuZCcpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gdG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICB2YXIgY3VycmVudFkgPSB0b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgIGlmICgoTWF0aC5hYnMoY3VycmVudFggLSBpbml0aWFsVG91Y2hTdGFydFgpID4gMjApIHx8XG4gICAgICAgICAgKE1hdGguYWJzKGN1cnJlbnRZIC0gaW5pdGlhbFRvdWNoU3RhcnRZKSA+IDIwKSkge1xuICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBpZiAoZXZ0LmNhbmNlbGFibGUpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUludmlzaWJsZUZpbGVJbnB1dFdyYXAgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGZpbGVFbGVtID0gY3JlYXRlRmlsZUlucHV0KClcbiAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwuaW5uZXJIVE1MID0gJ3VwbG9hZCdcbiAgbGFiZWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG4gIGxhYmVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICBsYWJlbC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gIGxhYmVsLnN0eWxlLndpZHRoID0gJzBweCdcbiAgbGFiZWwuc3R5bGUuaGVpZ2h0ID0gJzBweCdcbiAgbGFiZWwuc3R5bGUuYm9yZGVyID0gJ25vbmUnXG4gIGxhYmVsLnN0eWxlLm1hcmdpbiA9ICcwcHgnXG4gIGxhYmVsLnN0eWxlLnBhZGRpbmcgPSAnMHB4J1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywnLTEnKVxuICBcbiAgLy9iaW5kQXR0clRvRmlsZUlucHV0KGZpbGVFbGVtLCBsYWJlbCk7XG4gIC8vZ2VuZXJhdGVkRWxlbXMucHVzaCh7ZWw6IGVsZW0sIHJlZjogbGFiZWx9KTtcblxuICBsYWJlbC5hcHBlbmRDaGlsZCggZmlsZUVsZW0gKVxuICAvL2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGxhYmVsICk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRmlsZUlucHV0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBmaWxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGZpbGVFbGVtLnR5cGU9XCJmaWxlXCJcbiAgcmV0dXJuIGZpbGVFbGVtO1xufVxuIl19