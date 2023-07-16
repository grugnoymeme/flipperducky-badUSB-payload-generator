    document.getElementById('bottoneString').addEventListener('click', stringAte);
    document.getElementById('bottoneAltcode').addEventListener('click', altcodeAte);
    document.getElementById('bottoneRemark').addEventListener('click', remarkAte);
    document.getElementById('bottoneAltchar').addEventListener('click', insertChar);
    document.getElementById('tastoSalva').addEventListener('click', saveOutput);

    function stringAte() {
      const input = document.getElementById('inputz');
      const output = document.getElementById('output');
      let translatedInput = '';

      const lines = input.value.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line === '') {
          continue;
        } else {
          translatedInput += `STRING ${line}\n`;
        }
      }

      if (input.value[input.value.length - 1] !== '\n') {
        translatedInput += '\n';
      }

      output.value += translatedInput.trim() + '\n';
      input.value = '';
    }

    function altcodeAte() {
      const input = document.getElementById('inputz');
      const output = document.getElementById('output');
      let translatedInput = '';

      const lines = input.value.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line === '') {
          continue;
        } else {
          translatedInput += `ALTCODE ${line}\n`;
        }
      }

      if (input.value[input.value.length - 1] !== '\n') {
        translatedInput += '\n';
      }

      output.value += translatedInput.trim() + '\n';
      input.value = '';
    }

    function remarkAte() {
      const input = document.getElementById('input');
      const output = document.getElementById('output');
      let translatedInput = '';

      const lines = input.value.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line === '') {
          continue;
        } else {
          translatedInput += `REM ${line}\n`;
        }
      }

      if (input.value[input.value.length - 1] !== '\n') {
        translatedInput += '\n';
      }

      output.value += translatedInput.trim() + '\n';
      input.value = '';
    }

    function inserisciEVai(value) {
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
          continue;
        } else {
          translatedInput += `ALTCHAR ${line}\n`;
        }
      }

      if (input.value[input.value.length - 1] !== '\n') {
        translatedInput += '\n';
      }

      output.value += translatedInput.trim() + '\n';
      input.value = '';
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
