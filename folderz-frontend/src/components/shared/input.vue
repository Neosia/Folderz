<template>
    <b-form-group
                :id="'input-' + inputName"
                :label="labelText"
                :label-for="'input-'+ inputName"
            >
            <b-form-input
                :id="'input-' + inputName"
                v-model="propToBind"
                :type="type"
                required
                :placeholder="placeholder"
             ></b-form-input>
    </b-form-group>
</template>

<script>
export default {
    props:  [
        'propToBind',
        'labelText',
        'inputName',
        'placeholder',
        'type'
    ]
}
</script>

