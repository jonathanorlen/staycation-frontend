import React, { Component } from 'react'
import { connect } from "react-redux";

import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import PageFeaturedImages from 'parts/PageFeaturedImages';
import PageDescription from 'parts/PageDescription';
import BookingForm from 'parts/BookingForm';
import Activities from 'parts/Activities';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

import { fetchPage } from 'store/actions/page';
import { checkoutBooking } from "store/actions/checkout";

class DetailPage extends Component {
     componentDidMount() {
          window.title = "Staycation | Details Page";
          window.scrollTo(0, 0);

          if (!this.props.page[this.props.match.params.id])
               this.props.fetchPage(`/detail-page/${this.props.match.params.id}`, this.props.match.params.id);
     }

     render() {
          const { page, match } = this.props;

          if (!page[match.params.id]) return null;
          const breadcrumb = [
               { pageTitle: "Home", pageHref: "" },
               { pageTitle: "House Details", pageHref: "" },
          ];

          return (
               <>
                    <Header {...this.props}></Header>
                    <PageDetailTitle
                         breadcrumb={breadcrumb}
                         data={page[match.params.id]}
                    >
                    </PageDetailTitle>
                    <PageFeaturedImages data={page[match.params.id].imageId}></PageFeaturedImages>
                    <section className="container">
                         <div className="row">
                              <div className="col-12 col-md-7 pr-md-5 p-4">
                                   <PageDescription data={page[match.params.id]}></PageDescription>
                              </div>
                              <div className="col-12 col-md-5 p-4 p-md-5">
                                   <BookingForm itemDetails={page[match.params.id]} startBooking={this.props.checkoutBooking}></BookingForm>
                              </div>
                         </div>
                    </section>
                    <Activities data={page[match.params.id].activityId} />
                    <Testimony data={page[match.params.id].testimonial}></Testimony>
                    <Footer />
               </>
          )
     }
}

const mapStateToProps = (state) => ({
     page: state.page
})
export default connect(mapStateToProps, { checkoutBooking, fetchPage })(DetailPage)