
export default function ObjectDetails(props) {

    return (
		<div class="container padding">
			<div class="card-details" data-aos="fade-up">
				<div class="container-fliud padding">
					<div class="wrapper row">
						<div class="preview col-md-6" data-aos="fade-up">
							<div class="preview-pic tab-content">
								<div class="tab-pane active padding" id="pic-1"><img src={props.object.hinh} /></div>
							</div>
						</div>
						<div class="details col-md-6" data-aos="fade-up">
							<h3 class="product-title card-text">{props.object.name}</h3>
							<div class="rating">
								<div class="stars">
									<span class="fa fa-star checked"></span>
									<span class="fa fa-star checked"></span>
									<span class="fa fa-star checked"></span>
									<span class="fa fa-star"></span>
									<span class="fa fa-star"></span>
								</div>
								<span class="review-no">41 reviews</span>
							</div>
							<p class="product-description">Đánh giá</p>
							<p class="vote"><strong>Giá hiện tại: </strong>{props.object.price}<strong>(87 votes)</strong></p>
							<p>{props.object.description}</p>
							<button className="btn btn-primary">Thêm vào giỏ hàng</button>
					</div>
				</div>
			</div>
		</div>
	</div >
        )
}