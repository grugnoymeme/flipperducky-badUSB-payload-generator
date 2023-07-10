    document.getElementById('createStringButton').addEventListener('click', createString);
    document.getElementById('createAltcodeButton').addEventListener('click', createAltcode);
    document.getElementById('createRemarkButton').addEventListener('click', createRemark);
    document.getElementById('createAltcharButton').addEventListener('click', insertChar);
    document.getElementById('saveButton').addEventListener('click', saveOutput);

    function createString() {
      const input = document.getElementById('inputz');
      const output = document.getElementById('output');
      let translatedInput = '';

      const lines = input.value.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line === '') {
          continue; // Skip empty lines
        } else {
          translatedInput += `STRING ${line}\n`;
        }
      }

      // If the input does not end with a new line, append a new line to the translated input
      if (input.value[input.value.length - 1] !== '\n') {
        translatedInput += '\n';
      }

      output.value += translatedInput.trim() + '\n'; // Append to the output and add a new line
      input.value = ''; // Clear the input
    }

    function createAltcode() {
      const input = document.getElementById('inputz');
      const output = document.getElementById('output');
      let translatedInput = '';

      const lines = input.value.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line === '') {
          continue; // Skip empty lines
        } else {
          translatedInput += `ALTCODE ${line}\n`;
        }
      }

      // If the input does not end with a new line, append a new line to the translated input
      if (input.value[input.value.length - 1] !== '\n') {
        translatedInput += '\n';
      }

      output.value += translatedInput.trim() + '\n'; // Append to the output and add a new line
      input.value = ''; // Clear the input
    }

    function createRemark() {
      const input = document.getElementById('input');
      const output = document.getElementById('output');
      let translatedInput = '';

      const lines = input.value.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line === '') {
          continue; // Skip empty lines
        } else {
          translatedInput += `REM ${line}\n`;
        }
      }

      // If the input does not end with a new line, append a new line to the translated input
      if (input.value[input.value.length - 1] !== '\n') {
        translatedInput += '\n';
      }

      output.value += translatedInput.trim() + '\n'; // Append to the output and add a new line
      input.value = ''; // Clear the input
    }

    function hasDeadKeys(input) {
      const deadKeys = /[`^~"'\|$%&()=?@#*]/;
      return deadKeys.test(input);
    }

    function appendToOutput(value) {
      const output = document.getElementById('output');
        output.value += value + '\n';
    }

    function insertChar() {
      const input = document.getElementById('charInput');
      const output = document.getElementById('output');
      let translatedInput = '';

      const lines = input.value.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line === '') {
          continue; // Skip empty lines
        } else {
          translatedInput += `ALTCHAR ${line}\n`;
        }
      }

      // If the input does not end with a new line, append a new line to the translated input
      if (input.value[input.value.length - 1] !== '\n') {
        translatedInput += '\n';
      }

      output.value += translatedInput.trim() + '\n'; // Append to the output and add a new line
      input.value = ''; // Clear the input
    }

    function saveOutput() {
      const output = document.getElementById('output');
      const filename = prompt("Enter the payload name", "payload.txt");
      const blob = new Blob([output.value], { type: 'text/plain' });
      const anchor = document.createElement('a');
      anchor.download = filename || 'payload.txt';
      anchor.href = window.URL.createObjectURL(blob);
      anchor.click();
      anchor.remove();
    }
