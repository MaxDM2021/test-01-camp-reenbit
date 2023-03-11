import PropTypes from 'prop-types';
import FormSCSS from './Form.module.scss'


export const Form = ({ submit, searchMovieValue, onChang }) => {
    const onChange = event => {
        onChang(event.target.value.toLowerCase());
    };
    
    return (
        <form id="search-form" autoComplete="off" onSubmit={submit} className={FormSCSS.form}>
            <input
                className={FormSCSS.input}
                type="text"
                name="name"
                autoFocus
                placeholder="Search movies"
                onChange={onChange}
                value={searchMovieValue}
            />
            <button type="submit" className={FormSCSS.submit}>Search</button>
        </form>
    )
}
Form.propTypes = {
    submit: PropTypes.func.isRequired,
    searchMovieValue: PropTypes.string.isRequired,
    onChang: PropTypes.func.isRequired,
};