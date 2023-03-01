FROM ruby:3.2.1-alpine AS builder

RUN apk add \
  build-base \
  postgresql-dev

COPY Gemfile* .

ENV BUNDLE_JOBS=4 \
  BUNDLE_RETRY=3 \
  LANG=C.UTF-8

RUN bundle install

FROM ruby:3.2.1-alpine AS runner

RUN apk add \
  tzdata \
  nodejs \
  postgresql-dev

WORKDIR /app

# We copy over the entire gems directory for our builder image, containing the already built artifact
COPY --from=builder /usr/local/bundle/ /usr/local/bundle/
COPY . .
EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]
