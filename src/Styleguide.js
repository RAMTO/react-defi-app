import { Link } from 'react-router-dom';
import './scss/style.scss';

function Styleguide() {
  return (
    <div className="section pt-5 pb-5 pt-md-10 pb-md-10">
      <div className="container">
        <h1 className="text-mega">Styleguide</h1>

        <h2 className="text-display mt-10">Grid</h2>
        <hr className="mt-3 mb-6" />

        <h3 className="text-headline mb-4">Grid width - 1128px</h3>

        <div className="row mb-4">
          <div className="col-2 col-md-1">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-2 col-md-1">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-2 col-md-1">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-2 col-md-1">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-2 col-md-1">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-2 col-md-1">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-2 col-md-1">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-2 col-md-1">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-2 col-md-1">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-2 col-md-1">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-2 col-md-1">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-2 col-md-1">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12 col-md-3">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-12 col-md-3">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-12 col-md-3">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-12 col-md-3">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12 col-md-4">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-12 col-md-4">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-12 col-md-4">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12 col-md-6">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
          <div className="col-12 col-md-6">
            <p className="bg-grey text-center text-white p-2" style={{ borderRadius: '2px' }}>
              Col
            </p>
          </div>
        </div>

        <h2 className="text-display mt-10">Colors</h2>
        <hr className="mt-3 mb-6" />

        <h3 className="text-headline mb-4">Main</h3>

        <div className="row mb-4">
          <div className="col-12 col-md-2">
            <div
              style={{
                height: '64px',
                lineHeight: '64px',
                borderRadius: '2px',
              }}
              className="mb-2 bg-primary text-white text-center"
            >
              Primary
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div
              style={{
                height: '64px',
                lineHeight: '64px',
                borderRadius: '2px',
              }}
              className="mb-2 bg-secondary text-white text-center"
            >
              Secondary
            </div>
          </div>
        </div>

        <h3 className="text-headline mb-4">System</h3>

        <div className="row mb-4">
          <div className="col-12 col-md-2">
            <div
              style={{
                height: '64px',
                lineHeight: '64px',
                borderRadius: '2px',
              }}
              className="mb-2 bg-success text-white text-center"
            >
              Success
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div
              style={{
                height: '64px',
                lineHeight: '64px',
                borderRadius: '2px',
              }}
              className="mb-2 bg-danger text-white text-center"
            >
              Danger
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div
              style={{
                height: '64px',
                lineHeight: '64px',
                borderRadius: '2px',
              }}
              className="mb-2 bg-warning text-white text-center "
            >
              Warning
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div
              style={{
                height: '64px',
                lineHeight: '64px',
                borderRadius: '2px',
              }}
              className="mb-2 bg-info text-white text-center"
            >
              Info
            </div>
          </div>
        </div>

        <h3 className="text-headline mb-4">Grays</h3>

        <div className="row mb-4">
          <div className="col-12 col-md-2">
            <div
              style={{
                height: '64px',
                lineHeight: '64px',
                borderRadius: '2px',
              }}
              className="mb-2 bg-slate text-white text-center"
            >
              Slate
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div
              style={{
                height: '64px',
                lineHeight: '64px',
                borderRadius: '2px',
              }}
              className="mb-2 bg-grey text-white text-center"
            >
              Grey
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div
              style={{
                height: '64px',
                lineHeight: '64px',
                borderRadius: '2px',
              }}
              className="mb-2 bg-steel text-center"
            >
              Steel
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div
              style={{
                height: '64px',
                lineHeight: '64px',
                borderRadius: '2px',
              }}
              className="mb-2 bg-pale text-center"
            >
              Pale
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div
              style={{
                height: '64px',
                lineHeight: '64px',
                borderRadius: '2px',
              }}
              className="mb-2 bg-snow text-center"
            >
              Snow
            </div>
          </div>
        </div>

        <h2 className="text-display mt-10">Typography</h2>
        <hr className="mt-3 mb-6" />

        <div className="mb-4">
          <div className="row">
            <div className="col-md-9">
              <code>.text-hero</code>
              <h1 className="text-hero mt-3">The quick brown fox jumps over the lazy dog</h1>
            </div>
          </div>
        </div>

        <hr className="mt-6 mb-6" />

        <div className="mb-4">
          <div className="row">
            <div className="col-md-6">
              <code>.text-mega</code>
              <h2 className="text-mega mt-3">The quick brown fox jumps over the lazy dog</h2>
            </div>
          </div>
        </div>

        <hr className="mt-6 mb-6" />

        <div className="mb-4">
          <div className="row">
            <div className="col-md-5">
              <code>.text-display</code>
              <h3 className="text-display mt-3">The quick brown fox jumps over the lazy dog</h3>
            </div>
          </div>
        </div>

        <hr className="mt-6 mb-6" />

        <div className="mb-4">
          <div className="row">
            <div className="col-md-4">
              <code>.text-headline</code>
              <h4 className="text-headline mt-3">The quick brown fox jumps over the lazy dog</h4>
            </div>
          </div>
        </div>

        <hr className="mt-6 mb-6" />

        <div className="mb-4">
          <div className="row">
            <div className="col-md-3">
              <code>.text-title</code>
              <h5 className="text-title mt-3">The quick brown fox jumps over the lazy dog</h5>
            </div>
          </div>
        </div>

        <hr className="mt-6 mb-6" />

        <div className="mb-4">
          <div className="row">
            <div className="col-md-3">
              <code>.text-subheader</code>
              <h6 className="text-subheader mt-3">The quick brown fox jumps over the lazy dog</h6>
            </div>
          </div>
        </div>

        <hr className="mt-6 mb-6" />

        <div className="mb-4">
          <div className="row">
            <div className="col-md-3">
              <code>.text-lead</code>
              <p className="text-lead mt-3">The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
        </div>

        <hr className="mt-6 mb-6" />

        <div className="mb-4">
          <div className="row">
            <div className="col-md-3">
              <code>.text-main</code>
              <p className="text-main mt-3">The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
        </div>

        <hr className="mt-6 mb-6" />

        <div className="mb-4">
          <div className="row">
            <div className="col-md-2">
              <code>.text-small</code>
              <p className="text-small mt-3">The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
        </div>

        <hr className="mt-6 mb-6" />

        <div className="mb-4">
          <div className="row">
            <div className="col-md-2">
              <code>.text-micro</code>
              <p className="text-micro mt-3">The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
        </div>

        <hr className="mt-6 mb-6" />

        <div className="mb-4">
          <div className="row">
            <div className="col-md-6">
              <code>.link-primary</code>
              <p className="text-main mt-3">
                <Link to="/#" className="link-primary">
                  The quick brown fox jumps over the lazy dog
                </Link>
              </p>
            </div>
          </div>
        </div>

        <hr className="mt-6 mb-6" />

        <div className="mb-4">
          <div className="row">
            <div className="col-md-6">
              <code>.link-secondary</code>
              <p className="text-main mt-3">
                <Link to="/#" className="link-secondary">
                  The quick brown fox jumps over the lazy dog
                </Link>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-display mt-10">UI Elements</h2>
        <hr className="mt-3 mb-6" />

        <h3 className="text-headline mb-4">Buttons</h3>

        <div className="row mb-4">
          <div className="col-12 mb-4">
            <button type="button" className="btn btn-primary me-3">
              Primary
            </button>
            <button type="button" className="btn btn-secondary me-3">
              Secondary
            </button>
          </div>
          <div className="col-12 mb-4">
            <button type="button" className="btn btn-outline-primary me-3">
              Primary outline
            </button>
            <button type="button" className="btn btn-outline-secondary me-3">
              Secondary outline
            </button>
          </div>
          <div className="col-12 mb-4">
            <button type="button" className="btn btn-primary me-3" disabled>
              Primary disabled
            </button>
            <button type="button" className="btn btn-secondary me-3" disabled>
              Secondary disabled
            </button>
          </div>
        </div>

        <h3 className="text-headline mb-4">Forms</h3>

        <div className="row mb-4">
          <div className="col-lg-3">
            <div className="form-group mb-5">
              <label>Default input</label>
              <input type="email" className="form-control" placeholder="name@example.com" />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group mb-5">
              <label>Default input invalid</label>
              <input type="email" className="form-control is-invalid" placeholder="name@example.com" />
              <div className="invalid-feedback">Invalid e-mail.</div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group mb-5">
              <label>Default input disabled</label>
              <input type="email" className="form-control" disabled placeholder="name@example.com" />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-3">
            <div className="form-group mb-5 position-relative">
              <input type="email" className="form-control floating-form-control" required />
              <label className="floating-label">Floating input</label>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group mb-5 position-relative">
              <input type="email" className="form-control floating-form-control is-invalid" required />
              <label className="floating-label">Floating input invalid</label>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-3">
            <div className="form-group mb-5">
              <label>Custom select</label>
              <div className="custom-select-wrapper">
                <select className="form-select">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group mb-5">
              <label>Custom select invalid</label>
              <div className="custom-select-wrapper">
                <select className="form-select is-invalid">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-3">
            <div className="form-group mb-5">
              <label>Custom checkbox</label>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Check this custom checkbox
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group mb-5">
              <label>Custom checkbox invalid</label>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input is-invalid" id="customCheck2" />
                <label className="custom-control-label" htmlFor="customCheck2">
                  Check this custom checkbox
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-3">
            <div className="form-group mb-5">
              <label>Custom radios</label>
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadio1">
                  Toggle this custom radio
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadio2">
                  Or toggle this other custom radio
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group mb-5">
              <label>Custom radios invalid</label>
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio3" name="customRadio1" className="custom-control-input is-invalid" />
                <label className="custom-control-label" htmlFor="customRadio3">
                  Toggle this custom radio
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio4" name="customRadio1" className="custom-control-input is-invalid" />
                <label className="custom-control-label" htmlFor="customRadio4">
                  Or toggle this other custom radio
                </label>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-headline mb-4">Alerts</h3>

        <div className="row mb-6">
          <div className="col-lg-6">
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <div className="alert alert-info alert-dismissible fade show mt-5" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <div className="alert alert-warning alert-dismissible fade show mt-5" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <div className="alert alert-danger alert-dismissible fade show mt-5" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
        </div>

        <Link className="link-primary" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default Styleguide;
