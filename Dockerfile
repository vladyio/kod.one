FROM ruby:3.2.2-alpine AS builder

RUN apk add \
  build-base \
  postgresql-dev

COPY Gemfile* .

ENV BUNDLE_JOBS=4 \
  BUNDLE_RETRY=3 \
  LANG=C.UTF-8

RUN gem install bundler && bundle install

FROM ruby:3.2.2-alpine AS runner

RUN apk add \
  build-base \
  tzdata \
  nodejs \
  postgresql-dev \
  gcompat

WORKDIR /app

# We copy over the entire gems directory for our builder image, containing the already built artifact
COPY --from=builder /usr/local/bundle/ /usr/local/bundle/
COPY . .
EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]
