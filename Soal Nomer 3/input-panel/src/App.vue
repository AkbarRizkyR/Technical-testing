<template>
  <div class="input-panel max-w-md mx-auto p-6 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
    <div class="font-semibold text-xl mb-4">Form Inputs</div>
    <div v-for="(input, index) in inputs" :key="index" class="w-full">
      <div class="mb-4">
        <label :for="'input-' + index" class="block text-gray-700 text-sm font-bold mb-2">Input {{ index + 1 }}:</label>
        <div class="flex items-center justify-between">
          <select v-model="input.criteria" class="border bg-white p-2 rounded-l">
            <option value="age">Age</option>
            <option value="education">Education</option>
            <option value="interest">Interest</option>
            <option value="language">Language</option>
            <option value="martial-status">Martial Status</option>
            <option value="skill">Skill</option>
            <option value="other">Other</option>
          </select>
          <input :id="'input-' + index + '-input'" type="text" v-model="input.input" class="border p-2 rounded-r w-full ml-2" placeholder="Enter text" />
        </div>
      </div>
      <div>
        <button @click="addInput(index)" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
          Add After
        </button>
        <button @click="deleteInput(index)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </div>
    </div>
    <button @click="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputs: [{ criteria: '', input: '' }]
    };
  },
  methods: {
    addInput(index) {
      this.inputs.splice(index + 1, 0, { criteria: '', input: '' });
    },
    deleteInput(index) {
      this.inputs.splice(index, 1);
    },
    submit() {
      console.log(JSON.parse(JSON.stringify(this.inputs)));
    }
  }
};
</script>
