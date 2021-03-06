/**
 * Created by yangjiankang on 16/4/8.
 */
import CommonMixin from "../_CommonMixin.js";
import FormCommon from "./_FormCommon.js";

import Vue from "../../../node_modules/vue/dist/vue.js";

var template = `
    <div :id="config.id"
         v-bind:class="cssClass" v-bind:style="cssStyle"
         v-on:click.stop="ideSelected()">
        <div class="uk-grid uk-grid-collapse uk-form uk-form-horizontal uk-form-stacked">
            <div v-if="_showLabel" class="uk-width-{{_labelScale}}">
                <div class="uk-float-right" style="margin: 5px 5px 0 0">
                    <my-text :config="config.items.label"></my-text>
                </div>
            </div>
            <div class="uk-width-{{_mainScale}}">
                <div style="position: relative; display: inline-block" class="uk-width-{{_elementScale}}">
                    <select class="uk-width-1-1" v-model="config.value">
                        <option v-for="option in config.options" value="{{option.value}}">{{option.display}}</option>
                    </select>
                </div>
                <div class="">
                    <my-text :config="config.items.message"></my-text>
                </div>
            </div>
        </div>
    </div>
`;


var Select = Vue.extend({
    mixins: [CommonMixin, FormCommon],
    name: 'my-select',
    props: ['config'],
    methods: {

    },
    template: template
});

Vue.component('my-select', Select);

export default Select ;