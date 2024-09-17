
        let currentInput = '';

        function appendNumber(number) {
            currentInput += number;
            document.getElementById('input').value = currentInput;
            updatePreview();
        }

        function appendOperator(operator) {
            currentInput += ' ' + operator + ' ';
            document.getElementById('input').value = currentInput;
            updatePreview();
        }

        function appendDot() {
            currentInput += '.';
            document.getElementById('input').value = currentInput;
            updatePreview();
        }

        function clearInput() {
            currentInput = '';
            document.getElementById('input').value = '';
            document.getElementById('preview').innerHTML = 'Preview: ';  // Clear the preview
        }

        function updatePreview() {
            let expression = currentInput.replace('×', '*').replace('÷', '/');

            try {
                let previewResult = eval(expression);
                document.getElementById('preview').innerHTML = 'Preview: ' + previewResult;
            } catch (error) {
                document.getElementById('preview').innerHTML = 'Preview: Error';
            }
        }

        function calculate() {
            let expression = document.getElementById('input').value;
            try {
                let result = eval(expression.replace('×', '*').replace('÷', '/'));
                document.getElementById('input').value = result;
                currentInput = result.toString();  // Store result as the new input
                document.getElementById('preview').innerHTML = 'Preview: ';  // Clear the preview after calculation
            } catch (error) {
                document.getElementById('input').value = 'Error';
                document.getElementById('preview').innerHTML = 'Preview: Error';
            }
        }