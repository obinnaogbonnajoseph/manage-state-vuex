import { mapActions } from 'vuex';

export default {
    created() {
        this.getParts();
    },
    methods: {
        ...mapActions('robots', ['getParts'])
    },
    computed: {
        parts() {
            return this.$store.state.robots.parts || {
                heads: [],
                arms: [],
                torsos: [],
                bases: []
            };
        }
    }
};
