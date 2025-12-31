--
-- PostgreSQL database dump
--

\restrict o5h9fgVACKDuLt0UPfHxyT3vkKIym0e8nN3UzENXMA3VAC3TAY5IwVjm2gxqB3t

-- Dumped from database version 17.6
-- Dumped by pg_dump version 18.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP EVENT TRIGGER IF EXISTS pgrst_drop_watch;
DROP EVENT TRIGGER IF EXISTS pgrst_ddl_watch;
DROP EVENT TRIGGER IF EXISTS issue_pg_net_access;
DROP EVENT TRIGGER IF EXISTS issue_pg_graphql_access;
DROP EVENT TRIGGER IF EXISTS issue_pg_cron_access;
DROP EVENT TRIGGER IF EXISTS issue_graphql_placeholder;
DROP PUBLICATION IF EXISTS supabase_realtime;
ALTER TABLE IF EXISTS ONLY storage.vector_indexes DROP CONSTRAINT IF EXISTS vector_indexes_bucket_id_fkey;
ALTER TABLE IF EXISTS ONLY storage.s3_multipart_uploads_parts DROP CONSTRAINT IF EXISTS s3_multipart_uploads_parts_upload_id_fkey;
ALTER TABLE IF EXISTS ONLY storage.s3_multipart_uploads_parts DROP CONSTRAINT IF EXISTS s3_multipart_uploads_parts_bucket_id_fkey;
ALTER TABLE IF EXISTS ONLY storage.s3_multipart_uploads DROP CONSTRAINT IF EXISTS s3_multipart_uploads_bucket_id_fkey;
ALTER TABLE IF EXISTS ONLY storage.prefixes DROP CONSTRAINT IF EXISTS "prefixes_bucketId_fkey";
ALTER TABLE IF EXISTS ONLY storage.objects DROP CONSTRAINT IF EXISTS "objects_bucketId_fkey";
ALTER TABLE IF EXISTS ONLY public.users_sessions DROP CONSTRAINT IF EXISTS users_sessions_parent_id_fk;
ALTER TABLE IF EXISTS ONLY public.posts_rels DROP CONSTRAINT IF EXISTS posts_rels_tags_fk;
ALTER TABLE IF EXISTS ONLY public.posts_rels DROP CONSTRAINT IF EXISTS posts_rels_parent_fk;
ALTER TABLE IF EXISTS ONLY public.posts_rels DROP CONSTRAINT IF EXISTS posts_rels_categories_fk;
ALTER TABLE IF EXISTS ONLY public.posts DROP CONSTRAINT IF EXISTS posts_featured_image_id_media_id_fk;
ALTER TABLE IF EXISTS ONLY public.payload_preferences_rels DROP CONSTRAINT IF EXISTS payload_preferences_rels_users_fk;
ALTER TABLE IF EXISTS ONLY public.payload_preferences_rels DROP CONSTRAINT IF EXISTS payload_preferences_rels_parent_fk;
ALTER TABLE IF EXISTS ONLY public.payload_locked_documents_rels DROP CONSTRAINT IF EXISTS payload_locked_documents_rels_users_fk;
ALTER TABLE IF EXISTS ONLY public.payload_locked_documents_rels DROP CONSTRAINT IF EXISTS payload_locked_documents_rels_tags_fk;
ALTER TABLE IF EXISTS ONLY public.payload_locked_documents_rels DROP CONSTRAINT IF EXISTS payload_locked_documents_rels_posts_fk;
ALTER TABLE IF EXISTS ONLY public.payload_locked_documents_rels DROP CONSTRAINT IF EXISTS payload_locked_documents_rels_parent_fk;
ALTER TABLE IF EXISTS ONLY public.payload_locked_documents_rels DROP CONSTRAINT IF EXISTS payload_locked_documents_rels_media_fk;
ALTER TABLE IF EXISTS ONLY public.payload_locked_documents_rels DROP CONSTRAINT IF EXISTS payload_locked_documents_rels_leads_fk;
ALTER TABLE IF EXISTS ONLY public.payload_locked_documents_rels DROP CONSTRAINT IF EXISTS payload_locked_documents_rels_gallery_fk;
ALTER TABLE IF EXISTS ONLY public.payload_locked_documents_rels DROP CONSTRAINT IF EXISTS payload_locked_documents_rels_concepts_fk;
ALTER TABLE IF EXISTS ONLY public.payload_locked_documents_rels DROP CONSTRAINT IF EXISTS payload_locked_documents_rels_categories_fk;
ALTER TABLE IF EXISTS ONLY public.payload_locked_documents_rels DROP CONSTRAINT IF EXISTS payload_locked_documents_rels_booths_fk;
ALTER TABLE IF EXISTS ONLY public.gallery DROP CONSTRAINT IF EXISTS gallery_image_id_media_id_fk;
ALTER TABLE IF EXISTS ONLY public.concepts DROP CONSTRAINT IF EXISTS concepts_seo_image_id_media_id_fk;
ALTER TABLE IF EXISTS ONLY public.booths DROP CONSTRAINT IF EXISTS booths_thumbnail_image_id_media_id_fk;
ALTER TABLE IF EXISTS ONLY public.booths_gallery_images DROP CONSTRAINT IF EXISTS booths_gallery_images_parent_id_fk;
ALTER TABLE IF EXISTS ONLY public.booths_gallery_images DROP CONSTRAINT IF EXISTS booths_gallery_images_image_id_media_id_fk;
ALTER TABLE IF EXISTS ONLY public.booths_features DROP CONSTRAINT IF EXISTS booths_features_parent_id_fk;
ALTER TABLE IF EXISTS ONLY public.booths_faqs DROP CONSTRAINT IF EXISTS booths_faqs_parent_id_fk;
ALTER TABLE IF EXISTS ONLY public._posts_v DROP CONSTRAINT IF EXISTS _posts_v_version_featured_image_id_media_id_fk;
ALTER TABLE IF EXISTS ONLY public._posts_v_rels DROP CONSTRAINT IF EXISTS _posts_v_rels_tags_fk;
ALTER TABLE IF EXISTS ONLY public._posts_v_rels DROP CONSTRAINT IF EXISTS _posts_v_rels_parent_fk;
ALTER TABLE IF EXISTS ONLY public._posts_v_rels DROP CONSTRAINT IF EXISTS _posts_v_rels_categories_fk;
ALTER TABLE IF EXISTS ONLY public._posts_v DROP CONSTRAINT IF EXISTS _posts_v_parent_id_posts_id_fk;
ALTER TABLE IF EXISTS ONLY auth.sso_domains DROP CONSTRAINT IF EXISTS sso_domains_sso_provider_id_fkey;
ALTER TABLE IF EXISTS ONLY auth.sessions DROP CONSTRAINT IF EXISTS sessions_user_id_fkey;
ALTER TABLE IF EXISTS ONLY auth.sessions DROP CONSTRAINT IF EXISTS sessions_oauth_client_id_fkey;
ALTER TABLE IF EXISTS ONLY auth.saml_relay_states DROP CONSTRAINT IF EXISTS saml_relay_states_sso_provider_id_fkey;
ALTER TABLE IF EXISTS ONLY auth.saml_relay_states DROP CONSTRAINT IF EXISTS saml_relay_states_flow_state_id_fkey;
ALTER TABLE IF EXISTS ONLY auth.saml_providers DROP CONSTRAINT IF EXISTS saml_providers_sso_provider_id_fkey;
ALTER TABLE IF EXISTS ONLY auth.refresh_tokens DROP CONSTRAINT IF EXISTS refresh_tokens_session_id_fkey;
ALTER TABLE IF EXISTS ONLY auth.one_time_tokens DROP CONSTRAINT IF EXISTS one_time_tokens_user_id_fkey;
ALTER TABLE IF EXISTS ONLY auth.oauth_consents DROP CONSTRAINT IF EXISTS oauth_consents_user_id_fkey;
ALTER TABLE IF EXISTS ONLY auth.oauth_consents DROP CONSTRAINT IF EXISTS oauth_consents_client_id_fkey;
ALTER TABLE IF EXISTS ONLY auth.oauth_authorizations DROP CONSTRAINT IF EXISTS oauth_authorizations_user_id_fkey;
ALTER TABLE IF EXISTS ONLY auth.oauth_authorizations DROP CONSTRAINT IF EXISTS oauth_authorizations_client_id_fkey;
ALTER TABLE IF EXISTS ONLY auth.mfa_factors DROP CONSTRAINT IF EXISTS mfa_factors_user_id_fkey;
ALTER TABLE IF EXISTS ONLY auth.mfa_challenges DROP CONSTRAINT IF EXISTS mfa_challenges_auth_factor_id_fkey;
ALTER TABLE IF EXISTS ONLY auth.mfa_amr_claims DROP CONSTRAINT IF EXISTS mfa_amr_claims_session_id_fkey;
ALTER TABLE IF EXISTS ONLY auth.identities DROP CONSTRAINT IF EXISTS identities_user_id_fkey;
DROP TRIGGER IF EXISTS update_objects_updated_at ON storage.objects;
DROP TRIGGER IF EXISTS prefixes_delete_hierarchy ON storage.prefixes;
DROP TRIGGER IF EXISTS prefixes_create_hierarchy ON storage.prefixes;
DROP TRIGGER IF EXISTS objects_update_create_prefix ON storage.objects;
DROP TRIGGER IF EXISTS objects_insert_create_prefix ON storage.objects;
DROP TRIGGER IF EXISTS objects_delete_delete_prefix ON storage.objects;
DROP TRIGGER IF EXISTS enforce_bucket_name_length_trigger ON storage.buckets;
DROP TRIGGER IF EXISTS tr_check_filters ON realtime.subscription;
DROP INDEX IF EXISTS storage.vector_indexes_name_bucket_id_idx;
DROP INDEX IF EXISTS storage.objects_bucket_id_level_idx;
DROP INDEX IF EXISTS storage.name_prefix_search;
DROP INDEX IF EXISTS storage.idx_prefixes_lower_name;
DROP INDEX IF EXISTS storage.idx_objects_lower_name;
DROP INDEX IF EXISTS storage.idx_objects_bucket_id_name;
DROP INDEX IF EXISTS storage.idx_name_bucket_level_unique;
DROP INDEX IF EXISTS storage.idx_multipart_uploads_list;
DROP INDEX IF EXISTS storage.buckets_analytics_unique_name_idx;
DROP INDEX IF EXISTS storage.bucketid_objname;
DROP INDEX IF EXISTS storage.bname;
DROP INDEX IF EXISTS realtime.subscription_subscription_id_entity_filters_key;
DROP INDEX IF EXISTS realtime.messages_inserted_at_topic_index;
DROP INDEX IF EXISTS realtime.ix_realtime_subscription_entity;
DROP INDEX IF EXISTS public.users_updated_at_idx;
DROP INDEX IF EXISTS public.users_sessions_parent_id_idx;
DROP INDEX IF EXISTS public.users_sessions_order_idx;
DROP INDEX IF EXISTS public.users_email_idx;
DROP INDEX IF EXISTS public.users_created_at_idx;
DROP INDEX IF EXISTS public.tags_updated_at_idx;
DROP INDEX IF EXISTS public.tags_slug_idx;
DROP INDEX IF EXISTS public.tags_created_at_idx;
DROP INDEX IF EXISTS public.posts_updated_at_idx;
DROP INDEX IF EXISTS public.posts_slug_idx;
DROP INDEX IF EXISTS public.posts_rels_tags_id_idx;
DROP INDEX IF EXISTS public.posts_rels_path_idx;
DROP INDEX IF EXISTS public.posts_rels_parent_idx;
DROP INDEX IF EXISTS public.posts_rels_order_idx;
DROP INDEX IF EXISTS public.posts_rels_categories_id_idx;
DROP INDEX IF EXISTS public.posts_featured_image_idx;
DROP INDEX IF EXISTS public.posts_created_at_idx;
DROP INDEX IF EXISTS public.posts__status_idx;
DROP INDEX IF EXISTS public.payload_preferences_updated_at_idx;
DROP INDEX IF EXISTS public.payload_preferences_rels_users_id_idx;
DROP INDEX IF EXISTS public.payload_preferences_rels_path_idx;
DROP INDEX IF EXISTS public.payload_preferences_rels_parent_idx;
DROP INDEX IF EXISTS public.payload_preferences_rels_order_idx;
DROP INDEX IF EXISTS public.payload_preferences_key_idx;
DROP INDEX IF EXISTS public.payload_preferences_created_at_idx;
DROP INDEX IF EXISTS public.payload_migrations_updated_at_idx;
DROP INDEX IF EXISTS public.payload_migrations_created_at_idx;
DROP INDEX IF EXISTS public.payload_locked_documents_updated_at_idx;
DROP INDEX IF EXISTS public.payload_locked_documents_rels_users_id_idx;
DROP INDEX IF EXISTS public.payload_locked_documents_rels_tags_id_idx;
DROP INDEX IF EXISTS public.payload_locked_documents_rels_posts_id_idx;
DROP INDEX IF EXISTS public.payload_locked_documents_rels_path_idx;
DROP INDEX IF EXISTS public.payload_locked_documents_rels_parent_idx;
DROP INDEX IF EXISTS public.payload_locked_documents_rels_order_idx;
DROP INDEX IF EXISTS public.payload_locked_documents_rels_media_id_idx;
DROP INDEX IF EXISTS public.payload_locked_documents_rels_leads_id_idx;
DROP INDEX IF EXISTS public.payload_locked_documents_rels_gallery_id_idx;
DROP INDEX IF EXISTS public.payload_locked_documents_rels_concepts_id_idx;
DROP INDEX IF EXISTS public.payload_locked_documents_rels_categories_id_idx;
DROP INDEX IF EXISTS public.payload_locked_documents_rels_booths_id_idx;
DROP INDEX IF EXISTS public.payload_locked_documents_global_slug_idx;
DROP INDEX IF EXISTS public.payload_locked_documents_created_at_idx;
DROP INDEX IF EXISTS public.payload_kv_key_idx;
DROP INDEX IF EXISTS public.media_updated_at_idx;
DROP INDEX IF EXISTS public.media_filename_idx;
DROP INDEX IF EXISTS public.media_created_at_idx;
DROP INDEX IF EXISTS public.leads_updated_at_idx;
DROP INDEX IF EXISTS public.leads_created_at_idx;
DROP INDEX IF EXISTS public.gallery_updated_at_idx;
DROP INDEX IF EXISTS public.gallery_image_idx;
DROP INDEX IF EXISTS public.gallery_created_at_idx;
DROP INDEX IF EXISTS public.concepts_updated_at_idx;
DROP INDEX IF EXISTS public.concepts_slug_idx;
DROP INDEX IF EXISTS public.concepts_seo_seo_image_idx;
DROP INDEX IF EXISTS public.concepts_created_at_idx;
DROP INDEX IF EXISTS public.categories_updated_at_idx;
DROP INDEX IF EXISTS public.categories_slug_idx;
DROP INDEX IF EXISTS public.categories_created_at_idx;
DROP INDEX IF EXISTS public.booths_updated_at_idx;
DROP INDEX IF EXISTS public.booths_thumbnail_image_idx;
DROP INDEX IF EXISTS public.booths_slug_idx;
DROP INDEX IF EXISTS public.booths_gallery_images_parent_id_idx;
DROP INDEX IF EXISTS public.booths_gallery_images_order_idx;
DROP INDEX IF EXISTS public.booths_gallery_images_image_idx;
DROP INDEX IF EXISTS public.booths_features_parent_id_idx;
DROP INDEX IF EXISTS public.booths_features_order_idx;
DROP INDEX IF EXISTS public.booths_faqs_parent_id_idx;
DROP INDEX IF EXISTS public.booths_faqs_order_idx;
DROP INDEX IF EXISTS public.booths_created_at_idx;
DROP INDEX IF EXISTS public._posts_v_version_version_updated_at_idx;
DROP INDEX IF EXISTS public._posts_v_version_version_slug_idx;
DROP INDEX IF EXISTS public._posts_v_version_version_featured_image_idx;
DROP INDEX IF EXISTS public._posts_v_version_version_created_at_idx;
DROP INDEX IF EXISTS public._posts_v_version_version__status_idx;
DROP INDEX IF EXISTS public._posts_v_updated_at_idx;
DROP INDEX IF EXISTS public._posts_v_rels_tags_id_idx;
DROP INDEX IF EXISTS public._posts_v_rels_path_idx;
DROP INDEX IF EXISTS public._posts_v_rels_parent_idx;
DROP INDEX IF EXISTS public._posts_v_rels_order_idx;
DROP INDEX IF EXISTS public._posts_v_rels_categories_id_idx;
DROP INDEX IF EXISTS public._posts_v_parent_idx;
DROP INDEX IF EXISTS public._posts_v_latest_idx;
DROP INDEX IF EXISTS public._posts_v_created_at_idx;
DROP INDEX IF EXISTS auth.users_is_anonymous_idx;
DROP INDEX IF EXISTS auth.users_instance_id_idx;
DROP INDEX IF EXISTS auth.users_instance_id_email_idx;
DROP INDEX IF EXISTS auth.users_email_partial_key;
DROP INDEX IF EXISTS auth.user_id_created_at_idx;
DROP INDEX IF EXISTS auth.unique_phone_factor_per_user;
DROP INDEX IF EXISTS auth.sso_providers_resource_id_pattern_idx;
DROP INDEX IF EXISTS auth.sso_providers_resource_id_idx;
DROP INDEX IF EXISTS auth.sso_domains_sso_provider_id_idx;
DROP INDEX IF EXISTS auth.sso_domains_domain_idx;
DROP INDEX IF EXISTS auth.sessions_user_id_idx;
DROP INDEX IF EXISTS auth.sessions_oauth_client_id_idx;
DROP INDEX IF EXISTS auth.sessions_not_after_idx;
DROP INDEX IF EXISTS auth.saml_relay_states_sso_provider_id_idx;
DROP INDEX IF EXISTS auth.saml_relay_states_for_email_idx;
DROP INDEX IF EXISTS auth.saml_relay_states_created_at_idx;
DROP INDEX IF EXISTS auth.saml_providers_sso_provider_id_idx;
DROP INDEX IF EXISTS auth.refresh_tokens_updated_at_idx;
DROP INDEX IF EXISTS auth.refresh_tokens_session_id_revoked_idx;
DROP INDEX IF EXISTS auth.refresh_tokens_parent_idx;
DROP INDEX IF EXISTS auth.refresh_tokens_instance_id_user_id_idx;
DROP INDEX IF EXISTS auth.refresh_tokens_instance_id_idx;
DROP INDEX IF EXISTS auth.recovery_token_idx;
DROP INDEX IF EXISTS auth.reauthentication_token_idx;
DROP INDEX IF EXISTS auth.one_time_tokens_user_id_token_type_key;
DROP INDEX IF EXISTS auth.one_time_tokens_token_hash_hash_idx;
DROP INDEX IF EXISTS auth.one_time_tokens_relates_to_hash_idx;
DROP INDEX IF EXISTS auth.oauth_consents_user_order_idx;
DROP INDEX IF EXISTS auth.oauth_consents_active_user_client_idx;
DROP INDEX IF EXISTS auth.oauth_consents_active_client_idx;
DROP INDEX IF EXISTS auth.oauth_clients_deleted_at_idx;
DROP INDEX IF EXISTS auth.oauth_auth_pending_exp_idx;
DROP INDEX IF EXISTS auth.mfa_factors_user_id_idx;
DROP INDEX IF EXISTS auth.mfa_factors_user_friendly_name_unique;
DROP INDEX IF EXISTS auth.mfa_challenge_created_at_idx;
DROP INDEX IF EXISTS auth.idx_user_id_auth_method;
DROP INDEX IF EXISTS auth.idx_oauth_client_states_created_at;
DROP INDEX IF EXISTS auth.idx_auth_code;
DROP INDEX IF EXISTS auth.identities_user_id_idx;
DROP INDEX IF EXISTS auth.identities_email_idx;
DROP INDEX IF EXISTS auth.flow_state_created_at_idx;
DROP INDEX IF EXISTS auth.factor_id_created_at_idx;
DROP INDEX IF EXISTS auth.email_change_token_new_idx;
DROP INDEX IF EXISTS auth.email_change_token_current_idx;
DROP INDEX IF EXISTS auth.confirmation_token_idx;
DROP INDEX IF EXISTS auth.audit_logs_instance_id_idx;
ALTER TABLE IF EXISTS ONLY storage.vector_indexes DROP CONSTRAINT IF EXISTS vector_indexes_pkey;
ALTER TABLE IF EXISTS ONLY storage.s3_multipart_uploads DROP CONSTRAINT IF EXISTS s3_multipart_uploads_pkey;
ALTER TABLE IF EXISTS ONLY storage.s3_multipart_uploads_parts DROP CONSTRAINT IF EXISTS s3_multipart_uploads_parts_pkey;
ALTER TABLE IF EXISTS ONLY storage.prefixes DROP CONSTRAINT IF EXISTS prefixes_pkey;
ALTER TABLE IF EXISTS ONLY storage.objects DROP CONSTRAINT IF EXISTS objects_pkey;
ALTER TABLE IF EXISTS ONLY storage.migrations DROP CONSTRAINT IF EXISTS migrations_pkey;
ALTER TABLE IF EXISTS ONLY storage.migrations DROP CONSTRAINT IF EXISTS migrations_name_key;
ALTER TABLE IF EXISTS ONLY storage.buckets_vectors DROP CONSTRAINT IF EXISTS buckets_vectors_pkey;
ALTER TABLE IF EXISTS ONLY storage.buckets DROP CONSTRAINT IF EXISTS buckets_pkey;
ALTER TABLE IF EXISTS ONLY storage.buckets_analytics DROP CONSTRAINT IF EXISTS buckets_analytics_pkey;
ALTER TABLE IF EXISTS ONLY realtime.schema_migrations DROP CONSTRAINT IF EXISTS schema_migrations_pkey;
ALTER TABLE IF EXISTS ONLY realtime.subscription DROP CONSTRAINT IF EXISTS pk_subscription;
ALTER TABLE IF EXISTS ONLY realtime.messages DROP CONSTRAINT IF EXISTS messages_pkey;
ALTER TABLE IF EXISTS ONLY public.users_sessions DROP CONSTRAINT IF EXISTS users_sessions_pkey;
ALTER TABLE IF EXISTS ONLY public.users DROP CONSTRAINT IF EXISTS users_pkey;
ALTER TABLE IF EXISTS ONLY public.tags DROP CONSTRAINT IF EXISTS tags_pkey;
ALTER TABLE IF EXISTS ONLY public.settings DROP CONSTRAINT IF EXISTS settings_pkey;
ALTER TABLE IF EXISTS ONLY public.posts_rels DROP CONSTRAINT IF EXISTS posts_rels_pkey;
ALTER TABLE IF EXISTS ONLY public.posts DROP CONSTRAINT IF EXISTS posts_pkey;
ALTER TABLE IF EXISTS ONLY public.payload_preferences_rels DROP CONSTRAINT IF EXISTS payload_preferences_rels_pkey;
ALTER TABLE IF EXISTS ONLY public.payload_preferences DROP CONSTRAINT IF EXISTS payload_preferences_pkey;
ALTER TABLE IF EXISTS ONLY public.payload_migrations DROP CONSTRAINT IF EXISTS payload_migrations_pkey;
ALTER TABLE IF EXISTS ONLY public.payload_locked_documents_rels DROP CONSTRAINT IF EXISTS payload_locked_documents_rels_pkey;
ALTER TABLE IF EXISTS ONLY public.payload_locked_documents DROP CONSTRAINT IF EXISTS payload_locked_documents_pkey;
ALTER TABLE IF EXISTS ONLY public.payload_kv DROP CONSTRAINT IF EXISTS payload_kv_pkey;
ALTER TABLE IF EXISTS ONLY public.media DROP CONSTRAINT IF EXISTS media_pkey;
ALTER TABLE IF EXISTS ONLY public.leads DROP CONSTRAINT IF EXISTS leads_pkey;
ALTER TABLE IF EXISTS ONLY public.gallery DROP CONSTRAINT IF EXISTS gallery_pkey;
ALTER TABLE IF EXISTS ONLY public.concepts DROP CONSTRAINT IF EXISTS concepts_pkey;
ALTER TABLE IF EXISTS ONLY public.categories DROP CONSTRAINT IF EXISTS categories_pkey;
ALTER TABLE IF EXISTS ONLY public.booths DROP CONSTRAINT IF EXISTS booths_pkey;
ALTER TABLE IF EXISTS ONLY public.booths_gallery_images DROP CONSTRAINT IF EXISTS booths_gallery_images_pkey;
ALTER TABLE IF EXISTS ONLY public.booths_features DROP CONSTRAINT IF EXISTS booths_features_pkey;
ALTER TABLE IF EXISTS ONLY public.booths_faqs DROP CONSTRAINT IF EXISTS booths_faqs_pkey;
ALTER TABLE IF EXISTS ONLY public._posts_v_rels DROP CONSTRAINT IF EXISTS _posts_v_rels_pkey;
ALTER TABLE IF EXISTS ONLY public._posts_v DROP CONSTRAINT IF EXISTS _posts_v_pkey;
ALTER TABLE IF EXISTS ONLY auth.users DROP CONSTRAINT IF EXISTS users_pkey;
ALTER TABLE IF EXISTS ONLY auth.users DROP CONSTRAINT IF EXISTS users_phone_key;
ALTER TABLE IF EXISTS ONLY auth.sso_providers DROP CONSTRAINT IF EXISTS sso_providers_pkey;
ALTER TABLE IF EXISTS ONLY auth.sso_domains DROP CONSTRAINT IF EXISTS sso_domains_pkey;
ALTER TABLE IF EXISTS ONLY auth.sessions DROP CONSTRAINT IF EXISTS sessions_pkey;
ALTER TABLE IF EXISTS ONLY auth.schema_migrations DROP CONSTRAINT IF EXISTS schema_migrations_pkey;
ALTER TABLE IF EXISTS ONLY auth.saml_relay_states DROP CONSTRAINT IF EXISTS saml_relay_states_pkey;
ALTER TABLE IF EXISTS ONLY auth.saml_providers DROP CONSTRAINT IF EXISTS saml_providers_pkey;
ALTER TABLE IF EXISTS ONLY auth.saml_providers DROP CONSTRAINT IF EXISTS saml_providers_entity_id_key;
ALTER TABLE IF EXISTS ONLY auth.refresh_tokens DROP CONSTRAINT IF EXISTS refresh_tokens_token_unique;
ALTER TABLE IF EXISTS ONLY auth.refresh_tokens DROP CONSTRAINT IF EXISTS refresh_tokens_pkey;
ALTER TABLE IF EXISTS ONLY auth.one_time_tokens DROP CONSTRAINT IF EXISTS one_time_tokens_pkey;
ALTER TABLE IF EXISTS ONLY auth.oauth_consents DROP CONSTRAINT IF EXISTS oauth_consents_user_client_unique;
ALTER TABLE IF EXISTS ONLY auth.oauth_consents DROP CONSTRAINT IF EXISTS oauth_consents_pkey;
ALTER TABLE IF EXISTS ONLY auth.oauth_clients DROP CONSTRAINT IF EXISTS oauth_clients_pkey;
ALTER TABLE IF EXISTS ONLY auth.oauth_client_states DROP CONSTRAINT IF EXISTS oauth_client_states_pkey;
ALTER TABLE IF EXISTS ONLY auth.oauth_authorizations DROP CONSTRAINT IF EXISTS oauth_authorizations_pkey;
ALTER TABLE IF EXISTS ONLY auth.oauth_authorizations DROP CONSTRAINT IF EXISTS oauth_authorizations_authorization_id_key;
ALTER TABLE IF EXISTS ONLY auth.oauth_authorizations DROP CONSTRAINT IF EXISTS oauth_authorizations_authorization_code_key;
ALTER TABLE IF EXISTS ONLY auth.mfa_factors DROP CONSTRAINT IF EXISTS mfa_factors_pkey;
ALTER TABLE IF EXISTS ONLY auth.mfa_factors DROP CONSTRAINT IF EXISTS mfa_factors_last_challenged_at_key;
ALTER TABLE IF EXISTS ONLY auth.mfa_challenges DROP CONSTRAINT IF EXISTS mfa_challenges_pkey;
ALTER TABLE IF EXISTS ONLY auth.mfa_amr_claims DROP CONSTRAINT IF EXISTS mfa_amr_claims_session_id_authentication_method_pkey;
ALTER TABLE IF EXISTS ONLY auth.instances DROP CONSTRAINT IF EXISTS instances_pkey;
ALTER TABLE IF EXISTS ONLY auth.identities DROP CONSTRAINT IF EXISTS identities_provider_id_provider_unique;
ALTER TABLE IF EXISTS ONLY auth.identities DROP CONSTRAINT IF EXISTS identities_pkey;
ALTER TABLE IF EXISTS ONLY auth.flow_state DROP CONSTRAINT IF EXISTS flow_state_pkey;
ALTER TABLE IF EXISTS ONLY auth.audit_log_entries DROP CONSTRAINT IF EXISTS audit_log_entries_pkey;
ALTER TABLE IF EXISTS ONLY auth.mfa_amr_claims DROP CONSTRAINT IF EXISTS amr_id_pk;
ALTER TABLE IF EXISTS public.users ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.tags ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.settings ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.posts_rels ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.posts ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.payload_preferences_rels ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.payload_preferences ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.payload_migrations ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.payload_locked_documents_rels ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.payload_locked_documents ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.payload_kv ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.media ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.leads ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.gallery ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.concepts ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.categories ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.booths ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public._posts_v_rels ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public._posts_v ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS auth.refresh_tokens ALTER COLUMN id DROP DEFAULT;
DROP TABLE IF EXISTS storage.vector_indexes;
DROP TABLE IF EXISTS storage.s3_multipart_uploads_parts;
DROP TABLE IF EXISTS storage.s3_multipart_uploads;
DROP TABLE IF EXISTS storage.prefixes;
DROP TABLE IF EXISTS storage.objects;
DROP TABLE IF EXISTS storage.migrations;
DROP TABLE IF EXISTS storage.buckets_vectors;
DROP TABLE IF EXISTS storage.buckets_analytics;
DROP TABLE IF EXISTS storage.buckets;
DROP TABLE IF EXISTS realtime.subscription;
DROP TABLE IF EXISTS realtime.schema_migrations;
DROP TABLE IF EXISTS realtime.messages;
DROP TABLE IF EXISTS public.users_sessions;
DROP SEQUENCE IF EXISTS public.users_id_seq;
DROP TABLE IF EXISTS public.users;
DROP SEQUENCE IF EXISTS public.tags_id_seq;
DROP TABLE IF EXISTS public.tags;
DROP SEQUENCE IF EXISTS public.settings_id_seq;
DROP TABLE IF EXISTS public.settings;
DROP SEQUENCE IF EXISTS public.posts_rels_id_seq;
DROP TABLE IF EXISTS public.posts_rels;
DROP SEQUENCE IF EXISTS public.posts_id_seq;
DROP TABLE IF EXISTS public.posts;
DROP SEQUENCE IF EXISTS public.payload_preferences_rels_id_seq;
DROP TABLE IF EXISTS public.payload_preferences_rels;
DROP SEQUENCE IF EXISTS public.payload_preferences_id_seq;
DROP TABLE IF EXISTS public.payload_preferences;
DROP SEQUENCE IF EXISTS public.payload_migrations_id_seq;
DROP TABLE IF EXISTS public.payload_migrations;
DROP SEQUENCE IF EXISTS public.payload_locked_documents_rels_id_seq;
DROP TABLE IF EXISTS public.payload_locked_documents_rels;
DROP SEQUENCE IF EXISTS public.payload_locked_documents_id_seq;
DROP TABLE IF EXISTS public.payload_locked_documents;
DROP SEQUENCE IF EXISTS public.payload_kv_id_seq;
DROP TABLE IF EXISTS public.payload_kv;
DROP SEQUENCE IF EXISTS public.media_id_seq;
DROP TABLE IF EXISTS public.media;
DROP SEQUENCE IF EXISTS public.leads_id_seq;
DROP TABLE IF EXISTS public.leads;
DROP SEQUENCE IF EXISTS public.gallery_id_seq;
DROP TABLE IF EXISTS public.gallery;
DROP SEQUENCE IF EXISTS public.concepts_id_seq;
DROP TABLE IF EXISTS public.concepts;
DROP SEQUENCE IF EXISTS public.categories_id_seq;
DROP TABLE IF EXISTS public.categories;
DROP SEQUENCE IF EXISTS public.booths_id_seq;
DROP TABLE IF EXISTS public.booths_gallery_images;
DROP TABLE IF EXISTS public.booths_features;
DROP TABLE IF EXISTS public.booths_faqs;
DROP TABLE IF EXISTS public.booths;
DROP SEQUENCE IF EXISTS public._posts_v_rels_id_seq;
DROP TABLE IF EXISTS public._posts_v_rels;
DROP SEQUENCE IF EXISTS public._posts_v_id_seq;
DROP TABLE IF EXISTS public._posts_v;
DROP TABLE IF EXISTS auth.users;
DROP TABLE IF EXISTS auth.sso_providers;
DROP TABLE IF EXISTS auth.sso_domains;
DROP TABLE IF EXISTS auth.sessions;
DROP TABLE IF EXISTS auth.schema_migrations;
DROP TABLE IF EXISTS auth.saml_relay_states;
DROP TABLE IF EXISTS auth.saml_providers;
DROP SEQUENCE IF EXISTS auth.refresh_tokens_id_seq;
DROP TABLE IF EXISTS auth.refresh_tokens;
DROP TABLE IF EXISTS auth.one_time_tokens;
DROP TABLE IF EXISTS auth.oauth_consents;
DROP TABLE IF EXISTS auth.oauth_clients;
DROP TABLE IF EXISTS auth.oauth_client_states;
DROP TABLE IF EXISTS auth.oauth_authorizations;
DROP TABLE IF EXISTS auth.mfa_factors;
DROP TABLE IF EXISTS auth.mfa_challenges;
DROP TABLE IF EXISTS auth.mfa_amr_claims;
DROP TABLE IF EXISTS auth.instances;
DROP TABLE IF EXISTS auth.identities;
DROP TABLE IF EXISTS auth.flow_state;
DROP TABLE IF EXISTS auth.audit_log_entries;
DROP FUNCTION IF EXISTS storage.update_updated_at_column();
DROP FUNCTION IF EXISTS storage.search_v2(prefix text, bucket_name text, limits integer, levels integer, start_after text, sort_order text, sort_column text, sort_column_after text);
DROP FUNCTION IF EXISTS storage.search_v1_optimised(prefix text, bucketname text, limits integer, levels integer, offsets integer, search text, sortcolumn text, sortorder text);
DROP FUNCTION IF EXISTS storage.search_legacy_v1(prefix text, bucketname text, limits integer, levels integer, offsets integer, search text, sortcolumn text, sortorder text);
DROP FUNCTION IF EXISTS storage.search(prefix text, bucketname text, limits integer, levels integer, offsets integer, search text, sortcolumn text, sortorder text);
DROP FUNCTION IF EXISTS storage.prefixes_insert_trigger();
DROP FUNCTION IF EXISTS storage.prefixes_delete_cleanup();
DROP FUNCTION IF EXISTS storage.operation();
DROP FUNCTION IF EXISTS storage.objects_update_prefix_trigger();
DROP FUNCTION IF EXISTS storage.objects_update_level_trigger();
DROP FUNCTION IF EXISTS storage.objects_update_cleanup();
DROP FUNCTION IF EXISTS storage.objects_insert_prefix_trigger();
DROP FUNCTION IF EXISTS storage.objects_delete_cleanup();
DROP FUNCTION IF EXISTS storage.lock_top_prefixes(bucket_ids text[], names text[]);
DROP FUNCTION IF EXISTS storage.list_objects_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer, start_after text, next_token text);
DROP FUNCTION IF EXISTS storage.list_multipart_uploads_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer, next_key_token text, next_upload_token text);
DROP FUNCTION IF EXISTS storage.get_size_by_bucket();
DROP FUNCTION IF EXISTS storage.get_prefixes(name text);
DROP FUNCTION IF EXISTS storage.get_prefix(name text);
DROP FUNCTION IF EXISTS storage.get_level(name text);
DROP FUNCTION IF EXISTS storage.foldername(name text);
DROP FUNCTION IF EXISTS storage.filename(name text);
DROP FUNCTION IF EXISTS storage.extension(name text);
DROP FUNCTION IF EXISTS storage.enforce_bucket_name_length();
DROP FUNCTION IF EXISTS storage.delete_prefix_hierarchy_trigger();
DROP FUNCTION IF EXISTS storage.delete_prefix(_bucket_id text, _name text);
DROP FUNCTION IF EXISTS storage.delete_leaf_prefixes(bucket_ids text[], names text[]);
DROP FUNCTION IF EXISTS storage.can_insert_object(bucketid text, name text, owner uuid, metadata jsonb);
DROP FUNCTION IF EXISTS storage.add_prefixes(_bucket_id text, _name text);
DROP FUNCTION IF EXISTS realtime.topic();
DROP FUNCTION IF EXISTS realtime.to_regrole(role_name text);
DROP FUNCTION IF EXISTS realtime.subscription_check_filters();
DROP FUNCTION IF EXISTS realtime.send(payload jsonb, event text, topic text, private boolean);
DROP FUNCTION IF EXISTS realtime.quote_wal2json(entity regclass);
DROP FUNCTION IF EXISTS realtime.list_changes(publication name, slot_name name, max_changes integer, max_record_bytes integer);
DROP FUNCTION IF EXISTS realtime.is_visible_through_filters(columns realtime.wal_column[], filters realtime.user_defined_filter[]);
DROP FUNCTION IF EXISTS realtime.check_equality_op(op realtime.equality_op, type_ regtype, val_1 text, val_2 text);
DROP FUNCTION IF EXISTS realtime."cast"(val text, type_ regtype);
DROP FUNCTION IF EXISTS realtime.build_prepared_statement_sql(prepared_statement_name text, entity regclass, columns realtime.wal_column[]);
DROP FUNCTION IF EXISTS realtime.broadcast_changes(topic_name text, event_name text, operation text, table_name text, table_schema text, new record, old record, level text);
DROP FUNCTION IF EXISTS realtime.apply_rls(wal jsonb, max_record_bytes integer);
DROP FUNCTION IF EXISTS pgbouncer.get_auth(p_usename text);
DROP FUNCTION IF EXISTS extensions.set_graphql_placeholder();
DROP FUNCTION IF EXISTS extensions.pgrst_drop_watch();
DROP FUNCTION IF EXISTS extensions.pgrst_ddl_watch();
DROP FUNCTION IF EXISTS extensions.grant_pg_net_access();
DROP FUNCTION IF EXISTS extensions.grant_pg_graphql_access();
DROP FUNCTION IF EXISTS extensions.grant_pg_cron_access();
DROP FUNCTION IF EXISTS auth.uid();
DROP FUNCTION IF EXISTS auth.role();
DROP FUNCTION IF EXISTS auth.jwt();
DROP FUNCTION IF EXISTS auth.email();
DROP TYPE IF EXISTS storage.buckettype;
DROP TYPE IF EXISTS realtime.wal_rls;
DROP TYPE IF EXISTS realtime.wal_column;
DROP TYPE IF EXISTS realtime.user_defined_filter;
DROP TYPE IF EXISTS realtime.equality_op;
DROP TYPE IF EXISTS realtime.action;
DROP TYPE IF EXISTS public.enum_posts_status;
DROP TYPE IF EXISTS public.enum_gallery_type;
DROP TYPE IF EXISTS public.enum_gallery_category;
DROP TYPE IF EXISTS public.enum_booths_booth_type;
DROP TYPE IF EXISTS public.enum__posts_v_version_status;
DROP TYPE IF EXISTS auth.one_time_token_type;
DROP TYPE IF EXISTS auth.oauth_response_type;
DROP TYPE IF EXISTS auth.oauth_registration_type;
DROP TYPE IF EXISTS auth.oauth_client_type;
DROP TYPE IF EXISTS auth.oauth_authorization_status;
DROP TYPE IF EXISTS auth.factor_type;
DROP TYPE IF EXISTS auth.factor_status;
DROP TYPE IF EXISTS auth.code_challenge_method;
DROP TYPE IF EXISTS auth.aal_level;
DROP EXTENSION IF EXISTS "uuid-ossp";
DROP EXTENSION IF EXISTS supabase_vault;
DROP EXTENSION IF EXISTS pgcrypto;
DROP EXTENSION IF EXISTS pg_stat_statements;
DROP EXTENSION IF EXISTS pg_graphql;
DROP SCHEMA IF EXISTS vault;
DROP SCHEMA IF EXISTS storage;
DROP SCHEMA IF EXISTS realtime;
DROP SCHEMA IF EXISTS pgbouncer;
DROP SCHEMA IF EXISTS graphql_public;
DROP SCHEMA IF EXISTS graphql;
DROP SCHEMA IF EXISTS extensions;
DROP SCHEMA IF EXISTS auth;
--
-- Name: auth; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA auth;


--
-- Name: extensions; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA extensions;


--
-- Name: graphql; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA graphql;


--
-- Name: graphql_public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA graphql_public;


--
-- Name: pgbouncer; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA pgbouncer;


--
-- Name: realtime; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA realtime;


--
-- Name: storage; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA storage;


--
-- Name: vault; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA vault;


--
-- Name: pg_graphql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_graphql WITH SCHEMA graphql;


--
-- Name: EXTENSION pg_graphql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pg_graphql IS 'pg_graphql: GraphQL support';


--
-- Name: pg_stat_statements; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA extensions;


--
-- Name: EXTENSION pg_stat_statements; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pg_stat_statements IS 'track planning and execution statistics of all SQL statements executed';


--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: supabase_vault; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS supabase_vault WITH SCHEMA vault;


--
-- Name: EXTENSION supabase_vault; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION supabase_vault IS 'Supabase Vault Extension';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA extensions;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: aal_level; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.aal_level AS ENUM (
    'aal1',
    'aal2',
    'aal3'
);


--
-- Name: code_challenge_method; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.code_challenge_method AS ENUM (
    's256',
    'plain'
);


--
-- Name: factor_status; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.factor_status AS ENUM (
    'unverified',
    'verified'
);


--
-- Name: factor_type; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.factor_type AS ENUM (
    'totp',
    'webauthn',
    'phone'
);


--
-- Name: oauth_authorization_status; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.oauth_authorization_status AS ENUM (
    'pending',
    'approved',
    'denied',
    'expired'
);


--
-- Name: oauth_client_type; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.oauth_client_type AS ENUM (
    'public',
    'confidential'
);


--
-- Name: oauth_registration_type; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.oauth_registration_type AS ENUM (
    'dynamic',
    'manual'
);


--
-- Name: oauth_response_type; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.oauth_response_type AS ENUM (
    'code'
);


--
-- Name: one_time_token_type; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.one_time_token_type AS ENUM (
    'confirmation_token',
    'reauthentication_token',
    'recovery_token',
    'email_change_token_new',
    'email_change_token_current',
    'phone_change_token'
);


--
-- Name: enum__posts_v_version_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum__posts_v_version_status AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum_booths_booth_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum_booths_booth_type AS ENUM (
    'Photo Booth',
    'Video Booth',
    'Engagement Tech'
);


--
-- Name: enum_gallery_category; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum_gallery_category AS ENUM (
    'Corporate',
    'Wedding',
    'Social',
    'Other'
);


--
-- Name: enum_gallery_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum_gallery_type AS ENUM (
    'image',
    'video'
);


--
-- Name: enum_posts_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.enum_posts_status AS ENUM (
    'draft',
    'published'
);


--
-- Name: action; Type: TYPE; Schema: realtime; Owner: -
--

CREATE TYPE realtime.action AS ENUM (
    'INSERT',
    'UPDATE',
    'DELETE',
    'TRUNCATE',
    'ERROR'
);


--
-- Name: equality_op; Type: TYPE; Schema: realtime; Owner: -
--

CREATE TYPE realtime.equality_op AS ENUM (
    'eq',
    'neq',
    'lt',
    'lte',
    'gt',
    'gte',
    'in'
);


--
-- Name: user_defined_filter; Type: TYPE; Schema: realtime; Owner: -
--

CREATE TYPE realtime.user_defined_filter AS (
	column_name text,
	op realtime.equality_op,
	value text
);


--
-- Name: wal_column; Type: TYPE; Schema: realtime; Owner: -
--

CREATE TYPE realtime.wal_column AS (
	name text,
	type_name text,
	type_oid oid,
	value jsonb,
	is_pkey boolean,
	is_selectable boolean
);


--
-- Name: wal_rls; Type: TYPE; Schema: realtime; Owner: -
--

CREATE TYPE realtime.wal_rls AS (
	wal jsonb,
	is_rls_enabled boolean,
	subscription_ids uuid[],
	errors text[]
);


--
-- Name: buckettype; Type: TYPE; Schema: storage; Owner: -
--

CREATE TYPE storage.buckettype AS ENUM (
    'STANDARD',
    'ANALYTICS',
    'VECTOR'
);


--
-- Name: email(); Type: FUNCTION; Schema: auth; Owner: -
--

CREATE FUNCTION auth.email() RETURNS text
    LANGUAGE sql STABLE
    AS $$
  select 
  coalesce(
    nullif(current_setting('request.jwt.claim.email', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'email')
  )::text
$$;


--
-- Name: FUNCTION email(); Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON FUNCTION auth.email() IS 'Deprecated. Use auth.jwt() -> ''email'' instead.';


--
-- Name: jwt(); Type: FUNCTION; Schema: auth; Owner: -
--

CREATE FUNCTION auth.jwt() RETURNS jsonb
    LANGUAGE sql STABLE
    AS $$
  select 
    coalesce(
        nullif(current_setting('request.jwt.claim', true), ''),
        nullif(current_setting('request.jwt.claims', true), '')
    )::jsonb
$$;


--
-- Name: role(); Type: FUNCTION; Schema: auth; Owner: -
--

CREATE FUNCTION auth.role() RETURNS text
    LANGUAGE sql STABLE
    AS $$
  select 
  coalesce(
    nullif(current_setting('request.jwt.claim.role', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'role')
  )::text
$$;


--
-- Name: FUNCTION role(); Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON FUNCTION auth.role() IS 'Deprecated. Use auth.jwt() -> ''role'' instead.';


--
-- Name: uid(); Type: FUNCTION; Schema: auth; Owner: -
--

CREATE FUNCTION auth.uid() RETURNS uuid
    LANGUAGE sql STABLE
    AS $$
  select 
  coalesce(
    nullif(current_setting('request.jwt.claim.sub', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')
  )::uuid
$$;


--
-- Name: FUNCTION uid(); Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON FUNCTION auth.uid() IS 'Deprecated. Use auth.jwt() -> ''sub'' instead.';


--
-- Name: grant_pg_cron_access(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.grant_pg_cron_access() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  IF EXISTS (
    SELECT
    FROM pg_event_trigger_ddl_commands() AS ev
    JOIN pg_extension AS ext
    ON ev.objid = ext.oid
    WHERE ext.extname = 'pg_cron'
  )
  THEN
    grant usage on schema cron to postgres with grant option;

    alter default privileges in schema cron grant all on tables to postgres with grant option;
    alter default privileges in schema cron grant all on functions to postgres with grant option;
    alter default privileges in schema cron grant all on sequences to postgres with grant option;

    alter default privileges for user supabase_admin in schema cron grant all
        on sequences to postgres with grant option;
    alter default privileges for user supabase_admin in schema cron grant all
        on tables to postgres with grant option;
    alter default privileges for user supabase_admin in schema cron grant all
        on functions to postgres with grant option;

    grant all privileges on all tables in schema cron to postgres with grant option;
    revoke all on table cron.job from postgres;
    grant select on table cron.job to postgres with grant option;
  END IF;
END;
$$;


--
-- Name: FUNCTION grant_pg_cron_access(); Type: COMMENT; Schema: extensions; Owner: -
--

COMMENT ON FUNCTION extensions.grant_pg_cron_access() IS 'Grants access to pg_cron';


--
-- Name: grant_pg_graphql_access(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.grant_pg_graphql_access() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $_$
DECLARE
    func_is_graphql_resolve bool;
BEGIN
    func_is_graphql_resolve = (
        SELECT n.proname = 'resolve'
        FROM pg_event_trigger_ddl_commands() AS ev
        LEFT JOIN pg_catalog.pg_proc AS n
        ON ev.objid = n.oid
    );

    IF func_is_graphql_resolve
    THEN
        -- Update public wrapper to pass all arguments through to the pg_graphql resolve func
        DROP FUNCTION IF EXISTS graphql_public.graphql;
        create or replace function graphql_public.graphql(
            "operationName" text default null,
            query text default null,
            variables jsonb default null,
            extensions jsonb default null
        )
            returns jsonb
            language sql
        as $$
            select graphql.resolve(
                query := query,
                variables := coalesce(variables, '{}'),
                "operationName" := "operationName",
                extensions := extensions
            );
        $$;

        -- This hook executes when `graphql.resolve` is created. That is not necessarily the last
        -- function in the extension so we need to grant permissions on existing entities AND
        -- update default permissions to any others that are created after `graphql.resolve`
        grant usage on schema graphql to postgres, anon, authenticated, service_role;
        grant select on all tables in schema graphql to postgres, anon, authenticated, service_role;
        grant execute on all functions in schema graphql to postgres, anon, authenticated, service_role;
        grant all on all sequences in schema graphql to postgres, anon, authenticated, service_role;
        alter default privileges in schema graphql grant all on tables to postgres, anon, authenticated, service_role;
        alter default privileges in schema graphql grant all on functions to postgres, anon, authenticated, service_role;
        alter default privileges in schema graphql grant all on sequences to postgres, anon, authenticated, service_role;

        -- Allow postgres role to allow granting usage on graphql and graphql_public schemas to custom roles
        grant usage on schema graphql_public to postgres with grant option;
        grant usage on schema graphql to postgres with grant option;
    END IF;

END;
$_$;


--
-- Name: FUNCTION grant_pg_graphql_access(); Type: COMMENT; Schema: extensions; Owner: -
--

COMMENT ON FUNCTION extensions.grant_pg_graphql_access() IS 'Grants access to pg_graphql';


--
-- Name: grant_pg_net_access(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.grant_pg_net_access() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM pg_event_trigger_ddl_commands() AS ev
    JOIN pg_extension AS ext
    ON ev.objid = ext.oid
    WHERE ext.extname = 'pg_net'
  )
  THEN
    IF NOT EXISTS (
      SELECT 1
      FROM pg_roles
      WHERE rolname = 'supabase_functions_admin'
    )
    THEN
      CREATE USER supabase_functions_admin NOINHERIT CREATEROLE LOGIN NOREPLICATION;
    END IF;

    GRANT USAGE ON SCHEMA net TO supabase_functions_admin, postgres, anon, authenticated, service_role;

    IF EXISTS (
      SELECT FROM pg_extension
      WHERE extname = 'pg_net'
      -- all versions in use on existing projects as of 2025-02-20
      -- version 0.12.0 onwards don't need these applied
      AND extversion IN ('0.2', '0.6', '0.7', '0.7.1', '0.8', '0.10.0', '0.11.0')
    ) THEN
      ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;
      ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;

      ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;
      ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;

      REVOKE ALL ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;
      REVOKE ALL ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;

      GRANT EXECUTE ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;
      GRANT EXECUTE ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;
    END IF;
  END IF;
END;
$$;


--
-- Name: FUNCTION grant_pg_net_access(); Type: COMMENT; Schema: extensions; Owner: -
--

COMMENT ON FUNCTION extensions.grant_pg_net_access() IS 'Grants access to pg_net';


--
-- Name: pgrst_ddl_watch(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.pgrst_ddl_watch() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  cmd record;
BEGIN
  FOR cmd IN SELECT * FROM pg_event_trigger_ddl_commands()
  LOOP
    IF cmd.command_tag IN (
      'CREATE SCHEMA', 'ALTER SCHEMA'
    , 'CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO', 'ALTER TABLE'
    , 'CREATE FOREIGN TABLE', 'ALTER FOREIGN TABLE'
    , 'CREATE VIEW', 'ALTER VIEW'
    , 'CREATE MATERIALIZED VIEW', 'ALTER MATERIALIZED VIEW'
    , 'CREATE FUNCTION', 'ALTER FUNCTION'
    , 'CREATE TRIGGER'
    , 'CREATE TYPE', 'ALTER TYPE'
    , 'CREATE RULE'
    , 'COMMENT'
    )
    -- don't notify in case of CREATE TEMP table or other objects created on pg_temp
    AND cmd.schema_name is distinct from 'pg_temp'
    THEN
      NOTIFY pgrst, 'reload schema';
    END IF;
  END LOOP;
END; $$;


--
-- Name: pgrst_drop_watch(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.pgrst_drop_watch() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  obj record;
BEGIN
  FOR obj IN SELECT * FROM pg_event_trigger_dropped_objects()
  LOOP
    IF obj.object_type IN (
      'schema'
    , 'table'
    , 'foreign table'
    , 'view'
    , 'materialized view'
    , 'function'
    , 'trigger'
    , 'type'
    , 'rule'
    )
    AND obj.is_temporary IS false -- no pg_temp objects
    THEN
      NOTIFY pgrst, 'reload schema';
    END IF;
  END LOOP;
END; $$;


--
-- Name: set_graphql_placeholder(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.set_graphql_placeholder() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $_$
    DECLARE
    graphql_is_dropped bool;
    BEGIN
    graphql_is_dropped = (
        SELECT ev.schema_name = 'graphql_public'
        FROM pg_event_trigger_dropped_objects() AS ev
        WHERE ev.schema_name = 'graphql_public'
    );

    IF graphql_is_dropped
    THEN
        create or replace function graphql_public.graphql(
            "operationName" text default null,
            query text default null,
            variables jsonb default null,
            extensions jsonb default null
        )
            returns jsonb
            language plpgsql
        as $$
            DECLARE
                server_version float;
            BEGIN
                server_version = (SELECT (SPLIT_PART((select version()), ' ', 2))::float);

                IF server_version >= 14 THEN
                    RETURN jsonb_build_object(
                        'errors', jsonb_build_array(
                            jsonb_build_object(
                                'message', 'pg_graphql extension is not enabled.'
                            )
                        )
                    );
                ELSE
                    RETURN jsonb_build_object(
                        'errors', jsonb_build_array(
                            jsonb_build_object(
                                'message', 'pg_graphql is only available on projects running Postgres 14 onwards.'
                            )
                        )
                    );
                END IF;
            END;
        $$;
    END IF;

    END;
$_$;


--
-- Name: FUNCTION set_graphql_placeholder(); Type: COMMENT; Schema: extensions; Owner: -
--

COMMENT ON FUNCTION extensions.set_graphql_placeholder() IS 'Reintroduces placeholder function for graphql_public.graphql';


--
-- Name: get_auth(text); Type: FUNCTION; Schema: pgbouncer; Owner: -
--

CREATE FUNCTION pgbouncer.get_auth(p_usename text) RETURNS TABLE(username text, password text)
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO ''
    AS $_$
  BEGIN
      RAISE DEBUG 'PgBouncer auth request: %', p_usename;

      RETURN QUERY
      SELECT
          rolname::text,
          CASE WHEN rolvaliduntil < now()
              THEN null
              ELSE rolpassword::text
          END
      FROM pg_authid
      WHERE rolname=$1 and rolcanlogin;
  END;
  $_$;


--
-- Name: apply_rls(jsonb, integer); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.apply_rls(wal jsonb, max_record_bytes integer DEFAULT (1024 * 1024)) RETURNS SETOF realtime.wal_rls
    LANGUAGE plpgsql
    AS $$
declare
-- Regclass of the table e.g. public.notes
entity_ regclass = (quote_ident(wal ->> 'schema') || '.' || quote_ident(wal ->> 'table'))::regclass;

-- I, U, D, T: insert, update ...
action realtime.action = (
    case wal ->> 'action'
        when 'I' then 'INSERT'
        when 'U' then 'UPDATE'
        when 'D' then 'DELETE'
        else 'ERROR'
    end
);

-- Is row level security enabled for the table
is_rls_enabled bool = relrowsecurity from pg_class where oid = entity_;

subscriptions realtime.subscription[] = array_agg(subs)
    from
        realtime.subscription subs
    where
        subs.entity = entity_;

-- Subscription vars
roles regrole[] = array_agg(distinct us.claims_role::text)
    from
        unnest(subscriptions) us;

working_role regrole;
claimed_role regrole;
claims jsonb;

subscription_id uuid;
subscription_has_access bool;
visible_to_subscription_ids uuid[] = '{}';

-- structured info for wal's columns
columns realtime.wal_column[];
-- previous identity values for update/delete
old_columns realtime.wal_column[];

error_record_exceeds_max_size boolean = octet_length(wal::text) > max_record_bytes;

-- Primary jsonb output for record
output jsonb;

begin
perform set_config('role', null, true);

columns =
    array_agg(
        (
            x->>'name',
            x->>'type',
            x->>'typeoid',
            realtime.cast(
                (x->'value') #>> '{}',
                coalesce(
                    (x->>'typeoid')::regtype, -- null when wal2json version <= 2.4
                    (x->>'type')::regtype
                )
            ),
            (pks ->> 'name') is not null,
            true
        )::realtime.wal_column
    )
    from
        jsonb_array_elements(wal -> 'columns') x
        left join jsonb_array_elements(wal -> 'pk') pks
            on (x ->> 'name') = (pks ->> 'name');

old_columns =
    array_agg(
        (
            x->>'name',
            x->>'type',
            x->>'typeoid',
            realtime.cast(
                (x->'value') #>> '{}',
                coalesce(
                    (x->>'typeoid')::regtype, -- null when wal2json version <= 2.4
                    (x->>'type')::regtype
                )
            ),
            (pks ->> 'name') is not null,
            true
        )::realtime.wal_column
    )
    from
        jsonb_array_elements(wal -> 'identity') x
        left join jsonb_array_elements(wal -> 'pk') pks
            on (x ->> 'name') = (pks ->> 'name');

for working_role in select * from unnest(roles) loop

    -- Update `is_selectable` for columns and old_columns
    columns =
        array_agg(
            (
                c.name,
                c.type_name,
                c.type_oid,
                c.value,
                c.is_pkey,
                pg_catalog.has_column_privilege(working_role, entity_, c.name, 'SELECT')
            )::realtime.wal_column
        )
        from
            unnest(columns) c;

    old_columns =
            array_agg(
                (
                    c.name,
                    c.type_name,
                    c.type_oid,
                    c.value,
                    c.is_pkey,
                    pg_catalog.has_column_privilege(working_role, entity_, c.name, 'SELECT')
                )::realtime.wal_column
            )
            from
                unnest(old_columns) c;

    if action <> 'DELETE' and count(1) = 0 from unnest(columns) c where c.is_pkey then
        return next (
            jsonb_build_object(
                'schema', wal ->> 'schema',
                'table', wal ->> 'table',
                'type', action
            ),
            is_rls_enabled,
            -- subscriptions is already filtered by entity
            (select array_agg(s.subscription_id) from unnest(subscriptions) as s where claims_role = working_role),
            array['Error 400: Bad Request, no primary key']
        )::realtime.wal_rls;

    -- The claims role does not have SELECT permission to the primary key of entity
    elsif action <> 'DELETE' and sum(c.is_selectable::int) <> count(1) from unnest(columns) c where c.is_pkey then
        return next (
            jsonb_build_object(
                'schema', wal ->> 'schema',
                'table', wal ->> 'table',
                'type', action
            ),
            is_rls_enabled,
            (select array_agg(s.subscription_id) from unnest(subscriptions) as s where claims_role = working_role),
            array['Error 401: Unauthorized']
        )::realtime.wal_rls;

    else
        output = jsonb_build_object(
            'schema', wal ->> 'schema',
            'table', wal ->> 'table',
            'type', action,
            'commit_timestamp', to_char(
                ((wal ->> 'timestamp')::timestamptz at time zone 'utc'),
                'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"'
            ),
            'columns', (
                select
                    jsonb_agg(
                        jsonb_build_object(
                            'name', pa.attname,
                            'type', pt.typname
                        )
                        order by pa.attnum asc
                    )
                from
                    pg_attribute pa
                    join pg_type pt
                        on pa.atttypid = pt.oid
                where
                    attrelid = entity_
                    and attnum > 0
                    and pg_catalog.has_column_privilege(working_role, entity_, pa.attname, 'SELECT')
            )
        )
        -- Add "record" key for insert and update
        || case
            when action in ('INSERT', 'UPDATE') then
                jsonb_build_object(
                    'record',
                    (
                        select
                            jsonb_object_agg(
                                -- if unchanged toast, get column name and value from old record
                                coalesce((c).name, (oc).name),
                                case
                                    when (c).name is null then (oc).value
                                    else (c).value
                                end
                            )
                        from
                            unnest(columns) c
                            full outer join unnest(old_columns) oc
                                on (c).name = (oc).name
                        where
                            coalesce((c).is_selectable, (oc).is_selectable)
                            and ( not error_record_exceeds_max_size or (octet_length((c).value::text) <= 64))
                    )
                )
            else '{}'::jsonb
        end
        -- Add "old_record" key for update and delete
        || case
            when action = 'UPDATE' then
                jsonb_build_object(
                        'old_record',
                        (
                            select jsonb_object_agg((c).name, (c).value)
                            from unnest(old_columns) c
                            where
                                (c).is_selectable
                                and ( not error_record_exceeds_max_size or (octet_length((c).value::text) <= 64))
                        )
                    )
            when action = 'DELETE' then
                jsonb_build_object(
                    'old_record',
                    (
                        select jsonb_object_agg((c).name, (c).value)
                        from unnest(old_columns) c
                        where
                            (c).is_selectable
                            and ( not error_record_exceeds_max_size or (octet_length((c).value::text) <= 64))
                            and ( not is_rls_enabled or (c).is_pkey ) -- if RLS enabled, we can't secure deletes so filter to pkey
                    )
                )
            else '{}'::jsonb
        end;

        -- Create the prepared statement
        if is_rls_enabled and action <> 'DELETE' then
            if (select 1 from pg_prepared_statements where name = 'walrus_rls_stmt' limit 1) > 0 then
                deallocate walrus_rls_stmt;
            end if;
            execute realtime.build_prepared_statement_sql('walrus_rls_stmt', entity_, columns);
        end if;

        visible_to_subscription_ids = '{}';

        for subscription_id, claims in (
                select
                    subs.subscription_id,
                    subs.claims
                from
                    unnest(subscriptions) subs
                where
                    subs.entity = entity_
                    and subs.claims_role = working_role
                    and (
                        realtime.is_visible_through_filters(columns, subs.filters)
                        or (
                          action = 'DELETE'
                          and realtime.is_visible_through_filters(old_columns, subs.filters)
                        )
                    )
        ) loop

            if not is_rls_enabled or action = 'DELETE' then
                visible_to_subscription_ids = visible_to_subscription_ids || subscription_id;
            else
                -- Check if RLS allows the role to see the record
                perform
                    -- Trim leading and trailing quotes from working_role because set_config
                    -- doesn't recognize the role as valid if they are included
                    set_config('role', trim(both '"' from working_role::text), true),
                    set_config('request.jwt.claims', claims::text, true);

                execute 'execute walrus_rls_stmt' into subscription_has_access;

                if subscription_has_access then
                    visible_to_subscription_ids = visible_to_subscription_ids || subscription_id;
                end if;
            end if;
        end loop;

        perform set_config('role', null, true);

        return next (
            output,
            is_rls_enabled,
            visible_to_subscription_ids,
            case
                when error_record_exceeds_max_size then array['Error 413: Payload Too Large']
                else '{}'
            end
        )::realtime.wal_rls;

    end if;
end loop;

perform set_config('role', null, true);
end;
$$;


--
-- Name: broadcast_changes(text, text, text, text, text, record, record, text); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.broadcast_changes(topic_name text, event_name text, operation text, table_name text, table_schema text, new record, old record, level text DEFAULT 'ROW'::text) RETURNS void
    LANGUAGE plpgsql
    AS $$
DECLARE
    -- Declare a variable to hold the JSONB representation of the row
    row_data jsonb := '{}'::jsonb;
BEGIN
    IF level = 'STATEMENT' THEN
        RAISE EXCEPTION 'function can only be triggered for each row, not for each statement';
    END IF;
    -- Check the operation type and handle accordingly
    IF operation = 'INSERT' OR operation = 'UPDATE' OR operation = 'DELETE' THEN
        row_data := jsonb_build_object('old_record', OLD, 'record', NEW, 'operation', operation, 'table', table_name, 'schema', table_schema);
        PERFORM realtime.send (row_data, event_name, topic_name);
    ELSE
        RAISE EXCEPTION 'Unexpected operation type: %', operation;
    END IF;
EXCEPTION
    WHEN OTHERS THEN
        RAISE EXCEPTION 'Failed to process the row: %', SQLERRM;
END;

$$;


--
-- Name: build_prepared_statement_sql(text, regclass, realtime.wal_column[]); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.build_prepared_statement_sql(prepared_statement_name text, entity regclass, columns realtime.wal_column[]) RETURNS text
    LANGUAGE sql
    AS $$
      /*
      Builds a sql string that, if executed, creates a prepared statement to
      tests retrive a row from *entity* by its primary key columns.
      Example
          select realtime.build_prepared_statement_sql('public.notes', '{"id"}'::text[], '{"bigint"}'::text[])
      */
          select
      'prepare ' || prepared_statement_name || ' as
          select
              exists(
                  select
                      1
                  from
                      ' || entity || '
                  where
                      ' || string_agg(quote_ident(pkc.name) || '=' || quote_nullable(pkc.value #>> '{}') , ' and ') || '
              )'
          from
              unnest(columns) pkc
          where
              pkc.is_pkey
          group by
              entity
      $$;


--
-- Name: cast(text, regtype); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime."cast"(val text, type_ regtype) RETURNS jsonb
    LANGUAGE plpgsql IMMUTABLE
    AS $$
    declare
      res jsonb;
    begin
      execute format('select to_jsonb(%L::'|| type_::text || ')', val)  into res;
      return res;
    end
    $$;


--
-- Name: check_equality_op(realtime.equality_op, regtype, text, text); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.check_equality_op(op realtime.equality_op, type_ regtype, val_1 text, val_2 text) RETURNS boolean
    LANGUAGE plpgsql IMMUTABLE
    AS $$
      /*
      Casts *val_1* and *val_2* as type *type_* and check the *op* condition for truthiness
      */
      declare
          op_symbol text = (
              case
                  when op = 'eq' then '='
                  when op = 'neq' then '!='
                  when op = 'lt' then '<'
                  when op = 'lte' then '<='
                  when op = 'gt' then '>'
                  when op = 'gte' then '>='
                  when op = 'in' then '= any'
                  else 'UNKNOWN OP'
              end
          );
          res boolean;
      begin
          execute format(
              'select %L::'|| type_::text || ' ' || op_symbol
              || ' ( %L::'
              || (
                  case
                      when op = 'in' then type_::text || '[]'
                      else type_::text end
              )
              || ')', val_1, val_2) into res;
          return res;
      end;
      $$;


--
-- Name: is_visible_through_filters(realtime.wal_column[], realtime.user_defined_filter[]); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.is_visible_through_filters(columns realtime.wal_column[], filters realtime.user_defined_filter[]) RETURNS boolean
    LANGUAGE sql IMMUTABLE
    AS $_$
    /*
    Should the record be visible (true) or filtered out (false) after *filters* are applied
    */
        select
            -- Default to allowed when no filters present
            $2 is null -- no filters. this should not happen because subscriptions has a default
            or array_length($2, 1) is null -- array length of an empty array is null
            or bool_and(
                coalesce(
                    realtime.check_equality_op(
                        op:=f.op,
                        type_:=coalesce(
                            col.type_oid::regtype, -- null when wal2json version <= 2.4
                            col.type_name::regtype
                        ),
                        -- cast jsonb to text
                        val_1:=col.value #>> '{}',
                        val_2:=f.value
                    ),
                    false -- if null, filter does not match
                )
            )
        from
            unnest(filters) f
            join unnest(columns) col
                on f.column_name = col.name;
    $_$;


--
-- Name: list_changes(name, name, integer, integer); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.list_changes(publication name, slot_name name, max_changes integer, max_record_bytes integer) RETURNS SETOF realtime.wal_rls
    LANGUAGE sql
    SET log_min_messages TO 'fatal'
    AS $$
      with pub as (
        select
          concat_ws(
            ',',
            case when bool_or(pubinsert) then 'insert' else null end,
            case when bool_or(pubupdate) then 'update' else null end,
            case when bool_or(pubdelete) then 'delete' else null end
          ) as w2j_actions,
          coalesce(
            string_agg(
              realtime.quote_wal2json(format('%I.%I', schemaname, tablename)::regclass),
              ','
            ) filter (where ppt.tablename is not null and ppt.tablename not like '% %'),
            ''
          ) w2j_add_tables
        from
          pg_publication pp
          left join pg_publication_tables ppt
            on pp.pubname = ppt.pubname
        where
          pp.pubname = publication
        group by
          pp.pubname
        limit 1
      ),
      w2j as (
        select
          x.*, pub.w2j_add_tables
        from
          pub,
          pg_logical_slot_get_changes(
            slot_name, null, max_changes,
            'include-pk', 'true',
            'include-transaction', 'false',
            'include-timestamp', 'true',
            'include-type-oids', 'true',
            'format-version', '2',
            'actions', pub.w2j_actions,
            'add-tables', pub.w2j_add_tables
          ) x
      )
      select
        xyz.wal,
        xyz.is_rls_enabled,
        xyz.subscription_ids,
        xyz.errors
      from
        w2j,
        realtime.apply_rls(
          wal := w2j.data::jsonb,
          max_record_bytes := max_record_bytes
        ) xyz(wal, is_rls_enabled, subscription_ids, errors)
      where
        w2j.w2j_add_tables <> ''
        and xyz.subscription_ids[1] is not null
    $$;


--
-- Name: quote_wal2json(regclass); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.quote_wal2json(entity regclass) RETURNS text
    LANGUAGE sql IMMUTABLE STRICT
    AS $$
      select
        (
          select string_agg('' || ch,'')
          from unnest(string_to_array(nsp.nspname::text, null)) with ordinality x(ch, idx)
          where
            not (x.idx = 1 and x.ch = '"')
            and not (
              x.idx = array_length(string_to_array(nsp.nspname::text, null), 1)
              and x.ch = '"'
            )
        )
        || '.'
        || (
          select string_agg('' || ch,'')
          from unnest(string_to_array(pc.relname::text, null)) with ordinality x(ch, idx)
          where
            not (x.idx = 1 and x.ch = '"')
            and not (
              x.idx = array_length(string_to_array(nsp.nspname::text, null), 1)
              and x.ch = '"'
            )
          )
      from
        pg_class pc
        join pg_namespace nsp
          on pc.relnamespace = nsp.oid
      where
        pc.oid = entity
    $$;


--
-- Name: send(jsonb, text, text, boolean); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.send(payload jsonb, event text, topic text, private boolean DEFAULT true) RETURNS void
    LANGUAGE plpgsql
    AS $$
DECLARE
  generated_id uuid;
  final_payload jsonb;
BEGIN
  BEGIN
    -- Generate a new UUID for the id
    generated_id := gen_random_uuid();

    -- Check if payload has an 'id' key, if not, add the generated UUID
    IF payload ? 'id' THEN
      final_payload := payload;
    ELSE
      final_payload := jsonb_set(payload, '{id}', to_jsonb(generated_id));
    END IF;

    -- Set the topic configuration
    EXECUTE format('SET LOCAL realtime.topic TO %L', topic);

    -- Attempt to insert the message
    INSERT INTO realtime.messages (id, payload, event, topic, private, extension)
    VALUES (generated_id, final_payload, event, topic, private, 'broadcast');
  EXCEPTION
    WHEN OTHERS THEN
      -- Capture and notify the error
      RAISE WARNING 'ErrorSendingBroadcastMessage: %', SQLERRM;
  END;
END;
$$;


--
-- Name: subscription_check_filters(); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.subscription_check_filters() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
    /*
    Validates that the user defined filters for a subscription:
    - refer to valid columns that the claimed role may access
    - values are coercable to the correct column type
    */
    declare
        col_names text[] = coalesce(
                array_agg(c.column_name order by c.ordinal_position),
                '{}'::text[]
            )
            from
                information_schema.columns c
            where
                format('%I.%I', c.table_schema, c.table_name)::regclass = new.entity
                and pg_catalog.has_column_privilege(
                    (new.claims ->> 'role'),
                    format('%I.%I', c.table_schema, c.table_name)::regclass,
                    c.column_name,
                    'SELECT'
                );
        filter realtime.user_defined_filter;
        col_type regtype;

        in_val jsonb;
    begin
        for filter in select * from unnest(new.filters) loop
            -- Filtered column is valid
            if not filter.column_name = any(col_names) then
                raise exception 'invalid column for filter %', filter.column_name;
            end if;

            -- Type is sanitized and safe for string interpolation
            col_type = (
                select atttypid::regtype
                from pg_catalog.pg_attribute
                where attrelid = new.entity
                      and attname = filter.column_name
            );
            if col_type is null then
                raise exception 'failed to lookup type for column %', filter.column_name;
            end if;

            -- Set maximum number of entries for in filter
            if filter.op = 'in'::realtime.equality_op then
                in_val = realtime.cast(filter.value, (col_type::text || '[]')::regtype);
                if coalesce(jsonb_array_length(in_val), 0) > 100 then
                    raise exception 'too many values for `in` filter. Maximum 100';
                end if;
            else
                -- raises an exception if value is not coercable to type
                perform realtime.cast(filter.value, col_type);
            end if;

        end loop;

        -- Apply consistent order to filters so the unique constraint on
        -- (subscription_id, entity, filters) can't be tricked by a different filter order
        new.filters = coalesce(
            array_agg(f order by f.column_name, f.op, f.value),
            '{}'
        ) from unnest(new.filters) f;

        return new;
    end;
    $$;


--
-- Name: to_regrole(text); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.to_regrole(role_name text) RETURNS regrole
    LANGUAGE sql IMMUTABLE
    AS $$ select role_name::regrole $$;


--
-- Name: topic(); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.topic() RETURNS text
    LANGUAGE sql STABLE
    AS $$
select nullif(current_setting('realtime.topic', true), '')::text;
$$;


--
-- Name: add_prefixes(text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.add_prefixes(_bucket_id text, _name text) RETURNS void
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
    prefixes text[];
BEGIN
    prefixes := "storage"."get_prefixes"("_name");

    IF array_length(prefixes, 1) > 0 THEN
        INSERT INTO storage.prefixes (name, bucket_id)
        SELECT UNNEST(prefixes) as name, "_bucket_id" ON CONFLICT DO NOTHING;
    END IF;
END;
$$;


--
-- Name: can_insert_object(text, text, uuid, jsonb); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.can_insert_object(bucketid text, name text, owner uuid, metadata jsonb) RETURNS void
    LANGUAGE plpgsql
    AS $$
BEGIN
  INSERT INTO "storage"."objects" ("bucket_id", "name", "owner", "metadata") VALUES (bucketid, name, owner, metadata);
  -- hack to rollback the successful insert
  RAISE sqlstate 'PT200' using
  message = 'ROLLBACK',
  detail = 'rollback successful insert';
END
$$;


--
-- Name: delete_leaf_prefixes(text[], text[]); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.delete_leaf_prefixes(bucket_ids text[], names text[]) RETURNS void
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
    v_rows_deleted integer;
BEGIN
    LOOP
        WITH candidates AS (
            SELECT DISTINCT
                t.bucket_id,
                unnest(storage.get_prefixes(t.name)) AS name
            FROM unnest(bucket_ids, names) AS t(bucket_id, name)
        ),
        uniq AS (
             SELECT
                 bucket_id,
                 name,
                 storage.get_level(name) AS level
             FROM candidates
             WHERE name <> ''
             GROUP BY bucket_id, name
        ),
        leaf AS (
             SELECT
                 p.bucket_id,
                 p.name,
                 p.level
             FROM storage.prefixes AS p
                  JOIN uniq AS u
                       ON u.bucket_id = p.bucket_id
                           AND u.name = p.name
                           AND u.level = p.level
             WHERE NOT EXISTS (
                 SELECT 1
                 FROM storage.objects AS o
                 WHERE o.bucket_id = p.bucket_id
                   AND o.level = p.level + 1
                   AND o.name COLLATE "C" LIKE p.name || '/%'
             )
             AND NOT EXISTS (
                 SELECT 1
                 FROM storage.prefixes AS c
                 WHERE c.bucket_id = p.bucket_id
                   AND c.level = p.level + 1
                   AND c.name COLLATE "C" LIKE p.name || '/%'
             )
        )
        DELETE
        FROM storage.prefixes AS p
            USING leaf AS l
        WHERE p.bucket_id = l.bucket_id
          AND p.name = l.name
          AND p.level = l.level;

        GET DIAGNOSTICS v_rows_deleted = ROW_COUNT;
        EXIT WHEN v_rows_deleted = 0;
    END LOOP;
END;
$$;


--
-- Name: delete_prefix(text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.delete_prefix(_bucket_id text, _name text) RETURNS boolean
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
BEGIN
    -- Check if we can delete the prefix
    IF EXISTS(
        SELECT FROM "storage"."prefixes"
        WHERE "prefixes"."bucket_id" = "_bucket_id"
          AND level = "storage"."get_level"("_name") + 1
          AND "prefixes"."name" COLLATE "C" LIKE "_name" || '/%'
        LIMIT 1
    )
    OR EXISTS(
        SELECT FROM "storage"."objects"
        WHERE "objects"."bucket_id" = "_bucket_id"
          AND "storage"."get_level"("objects"."name") = "storage"."get_level"("_name") + 1
          AND "objects"."name" COLLATE "C" LIKE "_name" || '/%'
        LIMIT 1
    ) THEN
    -- There are sub-objects, skip deletion
    RETURN false;
    ELSE
        DELETE FROM "storage"."prefixes"
        WHERE "prefixes"."bucket_id" = "_bucket_id"
          AND level = "storage"."get_level"("_name")
          AND "prefixes"."name" = "_name";
        RETURN true;
    END IF;
END;
$$;


--
-- Name: delete_prefix_hierarchy_trigger(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.delete_prefix_hierarchy_trigger() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
    prefix text;
BEGIN
    prefix := "storage"."get_prefix"(OLD."name");

    IF coalesce(prefix, '') != '' THEN
        PERFORM "storage"."delete_prefix"(OLD."bucket_id", prefix);
    END IF;

    RETURN OLD;
END;
$$;


--
-- Name: enforce_bucket_name_length(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.enforce_bucket_name_length() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
    if length(new.name) > 100 then
        raise exception 'bucket name "%" is too long (% characters). Max is 100.', new.name, length(new.name);
    end if;
    return new;
end;
$$;


--
-- Name: extension(text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.extension(name text) RETURNS text
    LANGUAGE plpgsql IMMUTABLE
    AS $$
DECLARE
    _parts text[];
    _filename text;
BEGIN
    SELECT string_to_array(name, '/') INTO _parts;
    SELECT _parts[array_length(_parts,1)] INTO _filename;
    RETURN reverse(split_part(reverse(_filename), '.', 1));
END
$$;


--
-- Name: filename(text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.filename(name text) RETURNS text
    LANGUAGE plpgsql
    AS $$
DECLARE
_parts text[];
BEGIN
	select string_to_array(name, '/') into _parts;
	return _parts[array_length(_parts,1)];
END
$$;


--
-- Name: foldername(text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.foldername(name text) RETURNS text[]
    LANGUAGE plpgsql IMMUTABLE
    AS $$
DECLARE
    _parts text[];
BEGIN
    -- Split on "/" to get path segments
    SELECT string_to_array(name, '/') INTO _parts;
    -- Return everything except the last segment
    RETURN _parts[1 : array_length(_parts,1) - 1];
END
$$;


--
-- Name: get_level(text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.get_level(name text) RETURNS integer
    LANGUAGE sql IMMUTABLE STRICT
    AS $$
SELECT array_length(string_to_array("name", '/'), 1);
$$;


--
-- Name: get_prefix(text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.get_prefix(name text) RETURNS text
    LANGUAGE sql IMMUTABLE STRICT
    AS $_$
SELECT
    CASE WHEN strpos("name", '/') > 0 THEN
             regexp_replace("name", '[\/]{1}[^\/]+\/?$', '')
         ELSE
             ''
        END;
$_$;


--
-- Name: get_prefixes(text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.get_prefixes(name text) RETURNS text[]
    LANGUAGE plpgsql IMMUTABLE STRICT
    AS $$
DECLARE
    parts text[];
    prefixes text[];
    prefix text;
BEGIN
    -- Split the name into parts by '/'
    parts := string_to_array("name", '/');
    prefixes := '{}';

    -- Construct the prefixes, stopping one level below the last part
    FOR i IN 1..array_length(parts, 1) - 1 LOOP
            prefix := array_to_string(parts[1:i], '/');
            prefixes := array_append(prefixes, prefix);
    END LOOP;

    RETURN prefixes;
END;
$$;


--
-- Name: get_size_by_bucket(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.get_size_by_bucket() RETURNS TABLE(size bigint, bucket_id text)
    LANGUAGE plpgsql STABLE
    AS $$
BEGIN
    return query
        select sum((metadata->>'size')::bigint) as size, obj.bucket_id
        from "storage".objects as obj
        group by obj.bucket_id;
END
$$;


--
-- Name: list_multipart_uploads_with_delimiter(text, text, text, integer, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.list_multipart_uploads_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer DEFAULT 100, next_key_token text DEFAULT ''::text, next_upload_token text DEFAULT ''::text) RETURNS TABLE(key text, id text, created_at timestamp with time zone)
    LANGUAGE plpgsql
    AS $_$
BEGIN
    RETURN QUERY EXECUTE
        'SELECT DISTINCT ON(key COLLATE "C") * from (
            SELECT
                CASE
                    WHEN position($2 IN substring(key from length($1) + 1)) > 0 THEN
                        substring(key from 1 for length($1) + position($2 IN substring(key from length($1) + 1)))
                    ELSE
                        key
                END AS key, id, created_at
            FROM
                storage.s3_multipart_uploads
            WHERE
                bucket_id = $5 AND
                key ILIKE $1 || ''%'' AND
                CASE
                    WHEN $4 != '''' AND $6 = '''' THEN
                        CASE
                            WHEN position($2 IN substring(key from length($1) + 1)) > 0 THEN
                                substring(key from 1 for length($1) + position($2 IN substring(key from length($1) + 1))) COLLATE "C" > $4
                            ELSE
                                key COLLATE "C" > $4
                            END
                    ELSE
                        true
                END AND
                CASE
                    WHEN $6 != '''' THEN
                        id COLLATE "C" > $6
                    ELSE
                        true
                    END
            ORDER BY
                key COLLATE "C" ASC, created_at ASC) as e order by key COLLATE "C" LIMIT $3'
        USING prefix_param, delimiter_param, max_keys, next_key_token, bucket_id, next_upload_token;
END;
$_$;


--
-- Name: list_objects_with_delimiter(text, text, text, integer, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.list_objects_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer DEFAULT 100, start_after text DEFAULT ''::text, next_token text DEFAULT ''::text) RETURNS TABLE(name text, id uuid, metadata jsonb, updated_at timestamp with time zone)
    LANGUAGE plpgsql
    AS $_$
BEGIN
    RETURN QUERY EXECUTE
        'SELECT DISTINCT ON(name COLLATE "C") * from (
            SELECT
                CASE
                    WHEN position($2 IN substring(name from length($1) + 1)) > 0 THEN
                        substring(name from 1 for length($1) + position($2 IN substring(name from length($1) + 1)))
                    ELSE
                        name
                END AS name, id, metadata, updated_at
            FROM
                storage.objects
            WHERE
                bucket_id = $5 AND
                name ILIKE $1 || ''%'' AND
                CASE
                    WHEN $6 != '''' THEN
                    name COLLATE "C" > $6
                ELSE true END
                AND CASE
                    WHEN $4 != '''' THEN
                        CASE
                            WHEN position($2 IN substring(name from length($1) + 1)) > 0 THEN
                                substring(name from 1 for length($1) + position($2 IN substring(name from length($1) + 1))) COLLATE "C" > $4
                            ELSE
                                name COLLATE "C" > $4
                            END
                    ELSE
                        true
                END
            ORDER BY
                name COLLATE "C" ASC) as e order by name COLLATE "C" LIMIT $3'
        USING prefix_param, delimiter_param, max_keys, next_token, bucket_id, start_after;
END;
$_$;


--
-- Name: lock_top_prefixes(text[], text[]); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.lock_top_prefixes(bucket_ids text[], names text[]) RETURNS void
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
    v_bucket text;
    v_top text;
BEGIN
    FOR v_bucket, v_top IN
        SELECT DISTINCT t.bucket_id,
            split_part(t.name, '/', 1) AS top
        FROM unnest(bucket_ids, names) AS t(bucket_id, name)
        WHERE t.name <> ''
        ORDER BY 1, 2
        LOOP
            PERFORM pg_advisory_xact_lock(hashtextextended(v_bucket || '/' || v_top, 0));
        END LOOP;
END;
$$;


--
-- Name: objects_delete_cleanup(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.objects_delete_cleanup() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
    v_bucket_ids text[];
    v_names      text[];
BEGIN
    IF current_setting('storage.gc.prefixes', true) = '1' THEN
        RETURN NULL;
    END IF;

    PERFORM set_config('storage.gc.prefixes', '1', true);

    SELECT COALESCE(array_agg(d.bucket_id), '{}'),
           COALESCE(array_agg(d.name), '{}')
    INTO v_bucket_ids, v_names
    FROM deleted AS d
    WHERE d.name <> '';

    PERFORM storage.lock_top_prefixes(v_bucket_ids, v_names);
    PERFORM storage.delete_leaf_prefixes(v_bucket_ids, v_names);

    RETURN NULL;
END;
$$;


--
-- Name: objects_insert_prefix_trigger(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.objects_insert_prefix_trigger() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    PERFORM "storage"."add_prefixes"(NEW."bucket_id", NEW."name");
    NEW.level := "storage"."get_level"(NEW."name");

    RETURN NEW;
END;
$$;


--
-- Name: objects_update_cleanup(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.objects_update_cleanup() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
    -- NEW - OLD (destinations to create prefixes for)
    v_add_bucket_ids text[];
    v_add_names      text[];

    -- OLD - NEW (sources to prune)
    v_src_bucket_ids text[];
    v_src_names      text[];
BEGIN
    IF TG_OP <> 'UPDATE' THEN
        RETURN NULL;
    END IF;

    -- 1) Compute NEW−OLD (added paths) and OLD−NEW (moved-away paths)
    WITH added AS (
        SELECT n.bucket_id, n.name
        FROM new_rows n
        WHERE n.name <> '' AND position('/' in n.name) > 0
        EXCEPT
        SELECT o.bucket_id, o.name FROM old_rows o WHERE o.name <> ''
    ),
    moved AS (
         SELECT o.bucket_id, o.name
         FROM old_rows o
         WHERE o.name <> ''
         EXCEPT
         SELECT n.bucket_id, n.name FROM new_rows n WHERE n.name <> ''
    )
    SELECT
        -- arrays for ADDED (dest) in stable order
        COALESCE( (SELECT array_agg(a.bucket_id ORDER BY a.bucket_id, a.name) FROM added a), '{}' ),
        COALESCE( (SELECT array_agg(a.name      ORDER BY a.bucket_id, a.name) FROM added a), '{}' ),
        -- arrays for MOVED (src) in stable order
        COALESCE( (SELECT array_agg(m.bucket_id ORDER BY m.bucket_id, m.name) FROM moved m), '{}' ),
        COALESCE( (SELECT array_agg(m.name      ORDER BY m.bucket_id, m.name) FROM moved m), '{}' )
    INTO v_add_bucket_ids, v_add_names, v_src_bucket_ids, v_src_names;

    -- Nothing to do?
    IF (array_length(v_add_bucket_ids, 1) IS NULL) AND (array_length(v_src_bucket_ids, 1) IS NULL) THEN
        RETURN NULL;
    END IF;

    -- 2) Take per-(bucket, top) locks: ALL prefixes in consistent global order to prevent deadlocks
    DECLARE
        v_all_bucket_ids text[];
        v_all_names text[];
    BEGIN
        -- Combine source and destination arrays for consistent lock ordering
        v_all_bucket_ids := COALESCE(v_src_bucket_ids, '{}') || COALESCE(v_add_bucket_ids, '{}');
        v_all_names := COALESCE(v_src_names, '{}') || COALESCE(v_add_names, '{}');

        -- Single lock call ensures consistent global ordering across all transactions
        IF array_length(v_all_bucket_ids, 1) IS NOT NULL THEN
            PERFORM storage.lock_top_prefixes(v_all_bucket_ids, v_all_names);
        END IF;
    END;

    -- 3) Create destination prefixes (NEW−OLD) BEFORE pruning sources
    IF array_length(v_add_bucket_ids, 1) IS NOT NULL THEN
        WITH candidates AS (
            SELECT DISTINCT t.bucket_id, unnest(storage.get_prefixes(t.name)) AS name
            FROM unnest(v_add_bucket_ids, v_add_names) AS t(bucket_id, name)
            WHERE name <> ''
        )
        INSERT INTO storage.prefixes (bucket_id, name)
        SELECT c.bucket_id, c.name
        FROM candidates c
        ON CONFLICT DO NOTHING;
    END IF;

    -- 4) Prune source prefixes bottom-up for OLD−NEW
    IF array_length(v_src_bucket_ids, 1) IS NOT NULL THEN
        -- re-entrancy guard so DELETE on prefixes won't recurse
        IF current_setting('storage.gc.prefixes', true) <> '1' THEN
            PERFORM set_config('storage.gc.prefixes', '1', true);
        END IF;

        PERFORM storage.delete_leaf_prefixes(v_src_bucket_ids, v_src_names);
    END IF;

    RETURN NULL;
END;
$$;


--
-- Name: objects_update_level_trigger(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.objects_update_level_trigger() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    -- Ensure this is an update operation and the name has changed
    IF TG_OP = 'UPDATE' AND (NEW."name" <> OLD."name" OR NEW."bucket_id" <> OLD."bucket_id") THEN
        -- Set the new level
        NEW."level" := "storage"."get_level"(NEW."name");
    END IF;
    RETURN NEW;
END;
$$;


--
-- Name: objects_update_prefix_trigger(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.objects_update_prefix_trigger() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
    old_prefixes TEXT[];
BEGIN
    -- Ensure this is an update operation and the name has changed
    IF TG_OP = 'UPDATE' AND (NEW."name" <> OLD."name" OR NEW."bucket_id" <> OLD."bucket_id") THEN
        -- Retrieve old prefixes
        old_prefixes := "storage"."get_prefixes"(OLD."name");

        -- Remove old prefixes that are only used by this object
        WITH all_prefixes as (
            SELECT unnest(old_prefixes) as prefix
        ),
        can_delete_prefixes as (
             SELECT prefix
             FROM all_prefixes
             WHERE NOT EXISTS (
                 SELECT 1 FROM "storage"."objects"
                 WHERE "bucket_id" = OLD."bucket_id"
                   AND "name" <> OLD."name"
                   AND "name" LIKE (prefix || '%')
             )
         )
        DELETE FROM "storage"."prefixes" WHERE name IN (SELECT prefix FROM can_delete_prefixes);

        -- Add new prefixes
        PERFORM "storage"."add_prefixes"(NEW."bucket_id", NEW."name");
    END IF;
    -- Set the new level
    NEW."level" := "storage"."get_level"(NEW."name");

    RETURN NEW;
END;
$$;


--
-- Name: operation(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.operation() RETURNS text
    LANGUAGE plpgsql STABLE
    AS $$
BEGIN
    RETURN current_setting('storage.operation', true);
END;
$$;


--
-- Name: prefixes_delete_cleanup(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.prefixes_delete_cleanup() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
    v_bucket_ids text[];
    v_names      text[];
BEGIN
    IF current_setting('storage.gc.prefixes', true) = '1' THEN
        RETURN NULL;
    END IF;

    PERFORM set_config('storage.gc.prefixes', '1', true);

    SELECT COALESCE(array_agg(d.bucket_id), '{}'),
           COALESCE(array_agg(d.name), '{}')
    INTO v_bucket_ids, v_names
    FROM deleted AS d
    WHERE d.name <> '';

    PERFORM storage.lock_top_prefixes(v_bucket_ids, v_names);
    PERFORM storage.delete_leaf_prefixes(v_bucket_ids, v_names);

    RETURN NULL;
END;
$$;


--
-- Name: prefixes_insert_trigger(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.prefixes_insert_trigger() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    PERFORM "storage"."add_prefixes"(NEW."bucket_id", NEW."name");
    RETURN NEW;
END;
$$;


--
-- Name: search(text, text, integer, integer, integer, text, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.search(prefix text, bucketname text, limits integer DEFAULT 100, levels integer DEFAULT 1, offsets integer DEFAULT 0, search text DEFAULT ''::text, sortcolumn text DEFAULT 'name'::text, sortorder text DEFAULT 'asc'::text) RETURNS TABLE(name text, id uuid, updated_at timestamp with time zone, created_at timestamp with time zone, last_accessed_at timestamp with time zone, metadata jsonb)
    LANGUAGE plpgsql
    AS $$
declare
    can_bypass_rls BOOLEAN;
begin
    SELECT rolbypassrls
    INTO can_bypass_rls
    FROM pg_roles
    WHERE rolname = coalesce(nullif(current_setting('role', true), 'none'), current_user);

    IF can_bypass_rls THEN
        RETURN QUERY SELECT * FROM storage.search_v1_optimised(prefix, bucketname, limits, levels, offsets, search, sortcolumn, sortorder);
    ELSE
        RETURN QUERY SELECT * FROM storage.search_legacy_v1(prefix, bucketname, limits, levels, offsets, search, sortcolumn, sortorder);
    END IF;
end;
$$;


--
-- Name: search_legacy_v1(text, text, integer, integer, integer, text, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.search_legacy_v1(prefix text, bucketname text, limits integer DEFAULT 100, levels integer DEFAULT 1, offsets integer DEFAULT 0, search text DEFAULT ''::text, sortcolumn text DEFAULT 'name'::text, sortorder text DEFAULT 'asc'::text) RETURNS TABLE(name text, id uuid, updated_at timestamp with time zone, created_at timestamp with time zone, last_accessed_at timestamp with time zone, metadata jsonb)
    LANGUAGE plpgsql STABLE
    AS $_$
declare
    v_order_by text;
    v_sort_order text;
begin
    case
        when sortcolumn = 'name' then
            v_order_by = 'name';
        when sortcolumn = 'updated_at' then
            v_order_by = 'updated_at';
        when sortcolumn = 'created_at' then
            v_order_by = 'created_at';
        when sortcolumn = 'last_accessed_at' then
            v_order_by = 'last_accessed_at';
        else
            v_order_by = 'name';
        end case;

    case
        when sortorder = 'asc' then
            v_sort_order = 'asc';
        when sortorder = 'desc' then
            v_sort_order = 'desc';
        else
            v_sort_order = 'asc';
        end case;

    v_order_by = v_order_by || ' ' || v_sort_order;

    return query execute
        'with folders as (
           select path_tokens[$1] as folder
           from storage.objects
             where objects.name ilike $2 || $3 || ''%''
               and bucket_id = $4
               and array_length(objects.path_tokens, 1) <> $1
           group by folder
           order by folder ' || v_sort_order || '
     )
     (select folder as "name",
            null as id,
            null as updated_at,
            null as created_at,
            null as last_accessed_at,
            null as metadata from folders)
     union all
     (select path_tokens[$1] as "name",
            id,
            updated_at,
            created_at,
            last_accessed_at,
            metadata
     from storage.objects
     where objects.name ilike $2 || $3 || ''%''
       and bucket_id = $4
       and array_length(objects.path_tokens, 1) = $1
     order by ' || v_order_by || ')
     limit $5
     offset $6' using levels, prefix, search, bucketname, limits, offsets;
end;
$_$;


--
-- Name: search_v1_optimised(text, text, integer, integer, integer, text, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.search_v1_optimised(prefix text, bucketname text, limits integer DEFAULT 100, levels integer DEFAULT 1, offsets integer DEFAULT 0, search text DEFAULT ''::text, sortcolumn text DEFAULT 'name'::text, sortorder text DEFAULT 'asc'::text) RETURNS TABLE(name text, id uuid, updated_at timestamp with time zone, created_at timestamp with time zone, last_accessed_at timestamp with time zone, metadata jsonb)
    LANGUAGE plpgsql STABLE
    AS $_$
declare
    v_order_by text;
    v_sort_order text;
begin
    case
        when sortcolumn = 'name' then
            v_order_by = 'name';
        when sortcolumn = 'updated_at' then
            v_order_by = 'updated_at';
        when sortcolumn = 'created_at' then
            v_order_by = 'created_at';
        when sortcolumn = 'last_accessed_at' then
            v_order_by = 'last_accessed_at';
        else
            v_order_by = 'name';
        end case;

    case
        when sortorder = 'asc' then
            v_sort_order = 'asc';
        when sortorder = 'desc' then
            v_sort_order = 'desc';
        else
            v_sort_order = 'asc';
        end case;

    v_order_by = v_order_by || ' ' || v_sort_order;

    return query execute
        'with folders as (
           select (string_to_array(name, ''/''))[level] as name
           from storage.prefixes
             where lower(prefixes.name) like lower($2 || $3) || ''%''
               and bucket_id = $4
               and level = $1
           order by name ' || v_sort_order || '
     )
     (select name,
            null as id,
            null as updated_at,
            null as created_at,
            null as last_accessed_at,
            null as metadata from folders)
     union all
     (select path_tokens[level] as "name",
            id,
            updated_at,
            created_at,
            last_accessed_at,
            metadata
     from storage.objects
     where lower(objects.name) like lower($2 || $3) || ''%''
       and bucket_id = $4
       and level = $1
     order by ' || v_order_by || ')
     limit $5
     offset $6' using levels, prefix, search, bucketname, limits, offsets;
end;
$_$;


--
-- Name: search_v2(text, text, integer, integer, text, text, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.search_v2(prefix text, bucket_name text, limits integer DEFAULT 100, levels integer DEFAULT 1, start_after text DEFAULT ''::text, sort_order text DEFAULT 'asc'::text, sort_column text DEFAULT 'name'::text, sort_column_after text DEFAULT ''::text) RETURNS TABLE(key text, name text, id uuid, updated_at timestamp with time zone, created_at timestamp with time zone, last_accessed_at timestamp with time zone, metadata jsonb)
    LANGUAGE plpgsql STABLE
    AS $_$
DECLARE
    sort_col text;
    sort_ord text;
    cursor_op text;
    cursor_expr text;
    sort_expr text;
BEGIN
    -- Validate sort_order
    sort_ord := lower(sort_order);
    IF sort_ord NOT IN ('asc', 'desc') THEN
        sort_ord := 'asc';
    END IF;

    -- Determine cursor comparison operator
    IF sort_ord = 'asc' THEN
        cursor_op := '>';
    ELSE
        cursor_op := '<';
    END IF;
    
    sort_col := lower(sort_column);
    -- Validate sort column  
    IF sort_col IN ('updated_at', 'created_at') THEN
        cursor_expr := format(
            '($5 = '''' OR ROW(date_trunc(''milliseconds'', %I), name COLLATE "C") %s ROW(COALESCE(NULLIF($6, '''')::timestamptz, ''epoch''::timestamptz), $5))',
            sort_col, cursor_op
        );
        sort_expr := format(
            'COALESCE(date_trunc(''milliseconds'', %I), ''epoch''::timestamptz) %s, name COLLATE "C" %s',
            sort_col, sort_ord, sort_ord
        );
    ELSE
        cursor_expr := format('($5 = '''' OR name COLLATE "C" %s $5)', cursor_op);
        sort_expr := format('name COLLATE "C" %s', sort_ord);
    END IF;

    RETURN QUERY EXECUTE format(
        $sql$
        SELECT * FROM (
            (
                SELECT
                    split_part(name, '/', $4) AS key,
                    name,
                    NULL::uuid AS id,
                    updated_at,
                    created_at,
                    NULL::timestamptz AS last_accessed_at,
                    NULL::jsonb AS metadata
                FROM storage.prefixes
                WHERE name COLLATE "C" LIKE $1 || '%%'
                    AND bucket_id = $2
                    AND level = $4
                    AND %s
                ORDER BY %s
                LIMIT $3
            )
            UNION ALL
            (
                SELECT
                    split_part(name, '/', $4) AS key,
                    name,
                    id,
                    updated_at,
                    created_at,
                    last_accessed_at,
                    metadata
                FROM storage.objects
                WHERE name COLLATE "C" LIKE $1 || '%%'
                    AND bucket_id = $2
                    AND level = $4
                    AND %s
                ORDER BY %s
                LIMIT $3
            )
        ) obj
        ORDER BY %s
        LIMIT $3
        $sql$,
        cursor_expr,    -- prefixes WHERE
        sort_expr,      -- prefixes ORDER BY
        cursor_expr,    -- objects WHERE
        sort_expr,      -- objects ORDER BY
        sort_expr       -- final ORDER BY
    )
    USING prefix, bucket_name, limits, levels, start_after, sort_column_after;
END;
$_$;


--
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW; 
END;
$$;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: audit_log_entries; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.audit_log_entries (
    instance_id uuid,
    id uuid NOT NULL,
    payload json,
    created_at timestamp with time zone,
    ip_address character varying(64) DEFAULT ''::character varying NOT NULL
);


--
-- Name: TABLE audit_log_entries; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.audit_log_entries IS 'Auth: Audit trail for user actions.';


--
-- Name: flow_state; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.flow_state (
    id uuid NOT NULL,
    user_id uuid,
    auth_code text NOT NULL,
    code_challenge_method auth.code_challenge_method NOT NULL,
    code_challenge text NOT NULL,
    provider_type text NOT NULL,
    provider_access_token text,
    provider_refresh_token text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    authentication_method text NOT NULL,
    auth_code_issued_at timestamp with time zone
);


--
-- Name: TABLE flow_state; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.flow_state IS 'stores metadata for pkce logins';


--
-- Name: identities; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.identities (
    provider_id text NOT NULL,
    user_id uuid NOT NULL,
    identity_data jsonb NOT NULL,
    provider text NOT NULL,
    last_sign_in_at timestamp with time zone,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    email text GENERATED ALWAYS AS (lower((identity_data ->> 'email'::text))) STORED,
    id uuid DEFAULT gen_random_uuid() NOT NULL
);


--
-- Name: TABLE identities; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.identities IS 'Auth: Stores identities associated to a user.';


--
-- Name: COLUMN identities.email; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.identities.email IS 'Auth: Email is a generated column that references the optional email property in the identity_data';


--
-- Name: instances; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.instances (
    id uuid NOT NULL,
    uuid uuid,
    raw_base_config text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


--
-- Name: TABLE instances; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.instances IS 'Auth: Manages users across multiple sites.';


--
-- Name: mfa_amr_claims; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.mfa_amr_claims (
    session_id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    authentication_method text NOT NULL,
    id uuid NOT NULL
);


--
-- Name: TABLE mfa_amr_claims; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.mfa_amr_claims IS 'auth: stores authenticator method reference claims for multi factor authentication';


--
-- Name: mfa_challenges; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.mfa_challenges (
    id uuid NOT NULL,
    factor_id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    verified_at timestamp with time zone,
    ip_address inet NOT NULL,
    otp_code text,
    web_authn_session_data jsonb
);


--
-- Name: TABLE mfa_challenges; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.mfa_challenges IS 'auth: stores metadata about challenge requests made';


--
-- Name: mfa_factors; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.mfa_factors (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    friendly_name text,
    factor_type auth.factor_type NOT NULL,
    status auth.factor_status NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    secret text,
    phone text,
    last_challenged_at timestamp with time zone,
    web_authn_credential jsonb,
    web_authn_aaguid uuid,
    last_webauthn_challenge_data jsonb
);


--
-- Name: TABLE mfa_factors; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.mfa_factors IS 'auth: stores metadata about factors';


--
-- Name: COLUMN mfa_factors.last_webauthn_challenge_data; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.mfa_factors.last_webauthn_challenge_data IS 'Stores the latest WebAuthn challenge data including attestation/assertion for customer verification';


--
-- Name: oauth_authorizations; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.oauth_authorizations (
    id uuid NOT NULL,
    authorization_id text NOT NULL,
    client_id uuid NOT NULL,
    user_id uuid,
    redirect_uri text NOT NULL,
    scope text NOT NULL,
    state text,
    resource text,
    code_challenge text,
    code_challenge_method auth.code_challenge_method,
    response_type auth.oauth_response_type DEFAULT 'code'::auth.oauth_response_type NOT NULL,
    status auth.oauth_authorization_status DEFAULT 'pending'::auth.oauth_authorization_status NOT NULL,
    authorization_code text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    expires_at timestamp with time zone DEFAULT (now() + '00:03:00'::interval) NOT NULL,
    approved_at timestamp with time zone,
    nonce text,
    CONSTRAINT oauth_authorizations_authorization_code_length CHECK ((char_length(authorization_code) <= 255)),
    CONSTRAINT oauth_authorizations_code_challenge_length CHECK ((char_length(code_challenge) <= 128)),
    CONSTRAINT oauth_authorizations_expires_at_future CHECK ((expires_at > created_at)),
    CONSTRAINT oauth_authorizations_nonce_length CHECK ((char_length(nonce) <= 255)),
    CONSTRAINT oauth_authorizations_redirect_uri_length CHECK ((char_length(redirect_uri) <= 2048)),
    CONSTRAINT oauth_authorizations_resource_length CHECK ((char_length(resource) <= 2048)),
    CONSTRAINT oauth_authorizations_scope_length CHECK ((char_length(scope) <= 4096)),
    CONSTRAINT oauth_authorizations_state_length CHECK ((char_length(state) <= 4096))
);


--
-- Name: oauth_client_states; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.oauth_client_states (
    id uuid NOT NULL,
    provider_type text NOT NULL,
    code_verifier text,
    created_at timestamp with time zone NOT NULL
);


--
-- Name: TABLE oauth_client_states; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.oauth_client_states IS 'Stores OAuth states for third-party provider authentication flows where Supabase acts as the OAuth client.';


--
-- Name: oauth_clients; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.oauth_clients (
    id uuid NOT NULL,
    client_secret_hash text,
    registration_type auth.oauth_registration_type NOT NULL,
    redirect_uris text NOT NULL,
    grant_types text NOT NULL,
    client_name text,
    client_uri text,
    logo_uri text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    client_type auth.oauth_client_type DEFAULT 'confidential'::auth.oauth_client_type NOT NULL,
    CONSTRAINT oauth_clients_client_name_length CHECK ((char_length(client_name) <= 1024)),
    CONSTRAINT oauth_clients_client_uri_length CHECK ((char_length(client_uri) <= 2048)),
    CONSTRAINT oauth_clients_logo_uri_length CHECK ((char_length(logo_uri) <= 2048))
);


--
-- Name: oauth_consents; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.oauth_consents (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    client_id uuid NOT NULL,
    scopes text NOT NULL,
    granted_at timestamp with time zone DEFAULT now() NOT NULL,
    revoked_at timestamp with time zone,
    CONSTRAINT oauth_consents_revoked_after_granted CHECK (((revoked_at IS NULL) OR (revoked_at >= granted_at))),
    CONSTRAINT oauth_consents_scopes_length CHECK ((char_length(scopes) <= 2048)),
    CONSTRAINT oauth_consents_scopes_not_empty CHECK ((char_length(TRIM(BOTH FROM scopes)) > 0))
);


--
-- Name: one_time_tokens; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.one_time_tokens (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    token_type auth.one_time_token_type NOT NULL,
    token_hash text NOT NULL,
    relates_to text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    CONSTRAINT one_time_tokens_token_hash_check CHECK ((char_length(token_hash) > 0))
);


--
-- Name: refresh_tokens; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.refresh_tokens (
    instance_id uuid,
    id bigint NOT NULL,
    token character varying(255),
    user_id character varying(255),
    revoked boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    parent character varying(255),
    session_id uuid
);


--
-- Name: TABLE refresh_tokens; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.refresh_tokens IS 'Auth: Store of tokens used to refresh JWT tokens once they expire.';


--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE; Schema: auth; Owner: -
--

CREATE SEQUENCE auth.refresh_tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: auth; Owner: -
--

ALTER SEQUENCE auth.refresh_tokens_id_seq OWNED BY auth.refresh_tokens.id;


--
-- Name: saml_providers; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.saml_providers (
    id uuid NOT NULL,
    sso_provider_id uuid NOT NULL,
    entity_id text NOT NULL,
    metadata_xml text NOT NULL,
    metadata_url text,
    attribute_mapping jsonb,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    name_id_format text,
    CONSTRAINT "entity_id not empty" CHECK ((char_length(entity_id) > 0)),
    CONSTRAINT "metadata_url not empty" CHECK (((metadata_url = NULL::text) OR (char_length(metadata_url) > 0))),
    CONSTRAINT "metadata_xml not empty" CHECK ((char_length(metadata_xml) > 0))
);


--
-- Name: TABLE saml_providers; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.saml_providers IS 'Auth: Manages SAML Identity Provider connections.';


--
-- Name: saml_relay_states; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.saml_relay_states (
    id uuid NOT NULL,
    sso_provider_id uuid NOT NULL,
    request_id text NOT NULL,
    for_email text,
    redirect_to text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    flow_state_id uuid,
    CONSTRAINT "request_id not empty" CHECK ((char_length(request_id) > 0))
);


--
-- Name: TABLE saml_relay_states; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.saml_relay_states IS 'Auth: Contains SAML Relay State information for each Service Provider initiated login.';


--
-- Name: schema_migrations; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.schema_migrations (
    version character varying(255) NOT NULL
);


--
-- Name: TABLE schema_migrations; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.schema_migrations IS 'Auth: Manages updates to the auth system.';


--
-- Name: sessions; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.sessions (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    factor_id uuid,
    aal auth.aal_level,
    not_after timestamp with time zone,
    refreshed_at timestamp without time zone,
    user_agent text,
    ip inet,
    tag text,
    oauth_client_id uuid,
    refresh_token_hmac_key text,
    refresh_token_counter bigint,
    scopes text,
    CONSTRAINT sessions_scopes_length CHECK ((char_length(scopes) <= 4096))
);


--
-- Name: TABLE sessions; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.sessions IS 'Auth: Stores session data associated to a user.';


--
-- Name: COLUMN sessions.not_after; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.sessions.not_after IS 'Auth: Not after is a nullable column that contains a timestamp after which the session should be regarded as expired.';


--
-- Name: COLUMN sessions.refresh_token_hmac_key; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.sessions.refresh_token_hmac_key IS 'Holds a HMAC-SHA256 key used to sign refresh tokens for this session.';


--
-- Name: COLUMN sessions.refresh_token_counter; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.sessions.refresh_token_counter IS 'Holds the ID (counter) of the last issued refresh token.';


--
-- Name: sso_domains; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.sso_domains (
    id uuid NOT NULL,
    sso_provider_id uuid NOT NULL,
    domain text NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    CONSTRAINT "domain not empty" CHECK ((char_length(domain) > 0))
);


--
-- Name: TABLE sso_domains; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.sso_domains IS 'Auth: Manages SSO email address domain mapping to an SSO Identity Provider.';


--
-- Name: sso_providers; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.sso_providers (
    id uuid NOT NULL,
    resource_id text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    disabled boolean,
    CONSTRAINT "resource_id not empty" CHECK (((resource_id = NULL::text) OR (char_length(resource_id) > 0)))
);


--
-- Name: TABLE sso_providers; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.sso_providers IS 'Auth: Manages SSO identity provider information; see saml_providers for SAML.';


--
-- Name: COLUMN sso_providers.resource_id; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.sso_providers.resource_id IS 'Auth: Uniquely identifies a SSO provider according to a user-chosen resource ID (case insensitive), useful in infrastructure as code.';


--
-- Name: users; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.users (
    instance_id uuid,
    id uuid NOT NULL,
    aud character varying(255),
    role character varying(255),
    email character varying(255),
    encrypted_password character varying(255),
    email_confirmed_at timestamp with time zone,
    invited_at timestamp with time zone,
    confirmation_token character varying(255),
    confirmation_sent_at timestamp with time zone,
    recovery_token character varying(255),
    recovery_sent_at timestamp with time zone,
    email_change_token_new character varying(255),
    email_change character varying(255),
    email_change_sent_at timestamp with time zone,
    last_sign_in_at timestamp with time zone,
    raw_app_meta_data jsonb,
    raw_user_meta_data jsonb,
    is_super_admin boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    phone text DEFAULT NULL::character varying,
    phone_confirmed_at timestamp with time zone,
    phone_change text DEFAULT ''::character varying,
    phone_change_token character varying(255) DEFAULT ''::character varying,
    phone_change_sent_at timestamp with time zone,
    confirmed_at timestamp with time zone GENERATED ALWAYS AS (LEAST(email_confirmed_at, phone_confirmed_at)) STORED,
    email_change_token_current character varying(255) DEFAULT ''::character varying,
    email_change_confirm_status smallint DEFAULT 0,
    banned_until timestamp with time zone,
    reauthentication_token character varying(255) DEFAULT ''::character varying,
    reauthentication_sent_at timestamp with time zone,
    is_sso_user boolean DEFAULT false NOT NULL,
    deleted_at timestamp with time zone,
    is_anonymous boolean DEFAULT false NOT NULL,
    CONSTRAINT users_email_change_confirm_status_check CHECK (((email_change_confirm_status >= 0) AND (email_change_confirm_status <= 2)))
);


--
-- Name: TABLE users; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.users IS 'Auth: Stores user login data within a secure schema.';


--
-- Name: COLUMN users.is_sso_user; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.users.is_sso_user IS 'Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails.';


--
-- Name: _posts_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._posts_v (
    id integer NOT NULL,
    parent_id integer,
    version_title character varying,
    version_slug character varying,
    version_excerpt character varying,
    version_content character varying,
    version_featured_image_id integer,
    version_published_at timestamp(3) with time zone,
    version_seo_title character varying,
    version_seo_meta_description character varying,
    version_seo_canonical_url character varying,
    version_seo_json_ld jsonb,
    version_updated_at timestamp(3) with time zone,
    version_created_at timestamp(3) with time zone,
    version__status public.enum__posts_v_version_status DEFAULT 'draft'::public.enum__posts_v_version_status,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    latest boolean
);


--
-- Name: _posts_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._posts_v_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _posts_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._posts_v_id_seq OWNED BY public._posts_v.id;


--
-- Name: _posts_v_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._posts_v_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    categories_id integer,
    tags_id integer
);


--
-- Name: _posts_v_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public._posts_v_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _posts_v_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public._posts_v_rels_id_seq OWNED BY public._posts_v_rels.id;


--
-- Name: booths; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.booths (
    id integer NOT NULL,
    title character varying NOT NULL,
    slug character varying NOT NULL,
    excerpt character varying,
    content character varying,
    booth_type public.enum_booths_booth_type NOT NULL,
    thumbnail_image_id integer NOT NULL,
    starting_price numeric,
    is_featured boolean DEFAULT false,
    seo_title character varying,
    seo_meta_description character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    sort_order numeric DEFAULT 100
);


--
-- Name: booths_faqs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.booths_faqs (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    question character varying,
    answer character varying
);


--
-- Name: booths_features; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.booths_features (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    icon character varying,
    text character varying
);


--
-- Name: booths_gallery_images; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.booths_gallery_images (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    image_id integer
);


--
-- Name: booths_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.booths_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: booths_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.booths_id_seq OWNED BY public.booths.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying NOT NULL,
    slug character varying NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: concepts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.concepts (
    id integer NOT NULL,
    title character varying NOT NULL,
    slug character varying NOT NULL,
    content character varying NOT NULL,
    seo_title character varying,
    seo_description character varying,
    seo_image_id integer,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


--
-- Name: concepts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.concepts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: concepts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.concepts_id_seq OWNED BY public.concepts.id;


--
-- Name: gallery; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.gallery (
    id integer NOT NULL,
    title character varying NOT NULL,
    type public.enum_gallery_type DEFAULT 'image'::public.enum_gallery_type NOT NULL,
    image_id integer NOT NULL,
    alt character varying,
    category public.enum_gallery_category DEFAULT 'Other'::public.enum_gallery_category,
    featured boolean DEFAULT true,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


--
-- Name: gallery_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.gallery_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: gallery_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.gallery_id_seq OWNED BY public.gallery.id;


--
-- Name: leads; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.leads (
    id integer NOT NULL,
    name character varying NOT NULL,
    email character varying NOT NULL,
    phone character varying,
    message character varying,
    booth_interest character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    utm_source character varying,
    utm_medium character varying,
    utm_campaign character varying,
    utm_term character varying,
    utm_content character varying
);


--
-- Name: leads_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.leads_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: leads_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.leads_id_seq OWNED BY public.leads.id;


--
-- Name: media; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.media (
    id integer NOT NULL,
    alt character varying NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    url character varying,
    thumbnail_u_r_l character varying,
    filename character varying,
    mime_type character varying,
    filesize numeric,
    width numeric,
    height numeric,
    focal_x numeric,
    focal_y numeric
);


--
-- Name: media_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.media_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: media_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.media_id_seq OWNED BY public.media.id;


--
-- Name: payload_kv; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.payload_kv (
    id integer NOT NULL,
    key character varying NOT NULL,
    data jsonb NOT NULL
);


--
-- Name: payload_kv_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.payload_kv_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_kv_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.payload_kv_id_seq OWNED BY public.payload_kv.id;


--
-- Name: payload_locked_documents; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.payload_locked_documents (
    id integer NOT NULL,
    global_slug character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.payload_locked_documents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.payload_locked_documents_id_seq OWNED BY public.payload_locked_documents.id;


--
-- Name: payload_locked_documents_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.payload_locked_documents_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    users_id integer,
    media_id integer,
    booths_id integer,
    leads_id integer,
    posts_id integer,
    categories_id integer,
    tags_id integer,
    gallery_id integer,
    concepts_id integer
);


--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.payload_locked_documents_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.payload_locked_documents_rels_id_seq OWNED BY public.payload_locked_documents_rels.id;


--
-- Name: payload_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.payload_migrations (
    id integer NOT NULL,
    name character varying,
    batch numeric,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


--
-- Name: payload_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.payload_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.payload_migrations_id_seq OWNED BY public.payload_migrations.id;


--
-- Name: payload_preferences; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.payload_preferences (
    id integer NOT NULL,
    key character varying,
    value jsonb,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


--
-- Name: payload_preferences_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.payload_preferences_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_preferences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.payload_preferences_id_seq OWNED BY public.payload_preferences.id;


--
-- Name: payload_preferences_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.payload_preferences_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    users_id integer
);


--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.payload_preferences_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.payload_preferences_rels_id_seq OWNED BY public.payload_preferences_rels.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    title character varying,
    slug character varying,
    excerpt character varying,
    content character varying,
    featured_image_id integer,
    published_at timestamp(3) with time zone,
    seo_title character varying,
    seo_meta_description character varying,
    seo_canonical_url character varying,
    seo_json_ld jsonb,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    _status public.enum_posts_status DEFAULT 'draft'::public.enum_posts_status
);


--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: posts_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.posts_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    categories_id integer,
    tags_id integer
);


--
-- Name: posts_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.posts_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.posts_rels_id_seq OWNED BY public.posts_rels.id;


--
-- Name: settings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.settings (
    id integer NOT NULL,
    gtm_id character varying,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


--
-- Name: settings_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.settings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: settings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.settings_id_seq OWNED BY public.settings.id;


--
-- Name: tags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tags (
    id integer NOT NULL,
    name character varying NOT NULL,
    slug character varying NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    email character varying NOT NULL,
    reset_password_token character varying,
    reset_password_expiration timestamp(3) with time zone,
    salt character varying,
    hash character varying,
    login_attempts numeric DEFAULT 0,
    lock_until timestamp(3) with time zone
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users_sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users_sessions (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    created_at timestamp(3) with time zone,
    expires_at timestamp(3) with time zone NOT NULL
);


--
-- Name: messages; Type: TABLE; Schema: realtime; Owner: -
--

CREATE TABLE realtime.messages (
    topic text NOT NULL,
    extension text NOT NULL,
    payload jsonb,
    event text,
    private boolean DEFAULT false,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    inserted_at timestamp without time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL
)
PARTITION BY RANGE (inserted_at);


--
-- Name: schema_migrations; Type: TABLE; Schema: realtime; Owner: -
--

CREATE TABLE realtime.schema_migrations (
    version bigint NOT NULL,
    inserted_at timestamp(0) without time zone
);


--
-- Name: subscription; Type: TABLE; Schema: realtime; Owner: -
--

CREATE TABLE realtime.subscription (
    id bigint NOT NULL,
    subscription_id uuid NOT NULL,
    entity regclass NOT NULL,
    filters realtime.user_defined_filter[] DEFAULT '{}'::realtime.user_defined_filter[] NOT NULL,
    claims jsonb NOT NULL,
    claims_role regrole GENERATED ALWAYS AS (realtime.to_regrole((claims ->> 'role'::text))) STORED NOT NULL,
    created_at timestamp without time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);


--
-- Name: subscription_id_seq; Type: SEQUENCE; Schema: realtime; Owner: -
--

ALTER TABLE realtime.subscription ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME realtime.subscription_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: buckets; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.buckets (
    id text NOT NULL,
    name text NOT NULL,
    owner uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    public boolean DEFAULT false,
    avif_autodetection boolean DEFAULT false,
    file_size_limit bigint,
    allowed_mime_types text[],
    owner_id text,
    type storage.buckettype DEFAULT 'STANDARD'::storage.buckettype NOT NULL
);


--
-- Name: COLUMN buckets.owner; Type: COMMENT; Schema: storage; Owner: -
--

COMMENT ON COLUMN storage.buckets.owner IS 'Field is deprecated, use owner_id instead';


--
-- Name: buckets_analytics; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.buckets_analytics (
    name text NOT NULL,
    type storage.buckettype DEFAULT 'ANALYTICS'::storage.buckettype NOT NULL,
    format text DEFAULT 'ICEBERG'::text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    deleted_at timestamp with time zone
);


--
-- Name: buckets_vectors; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.buckets_vectors (
    id text NOT NULL,
    type storage.buckettype DEFAULT 'VECTOR'::storage.buckettype NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: migrations; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.migrations (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    hash character varying(40) NOT NULL,
    executed_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: objects; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.objects (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    bucket_id text,
    name text,
    owner uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    last_accessed_at timestamp with time zone DEFAULT now(),
    metadata jsonb,
    path_tokens text[] GENERATED ALWAYS AS (string_to_array(name, '/'::text)) STORED,
    version text,
    owner_id text,
    user_metadata jsonb,
    level integer
);


--
-- Name: COLUMN objects.owner; Type: COMMENT; Schema: storage; Owner: -
--

COMMENT ON COLUMN storage.objects.owner IS 'Field is deprecated, use owner_id instead';


--
-- Name: prefixes; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.prefixes (
    bucket_id text NOT NULL,
    name text NOT NULL COLLATE pg_catalog."C",
    level integer GENERATED ALWAYS AS (storage.get_level(name)) STORED NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: s3_multipart_uploads; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.s3_multipart_uploads (
    id text NOT NULL,
    in_progress_size bigint DEFAULT 0 NOT NULL,
    upload_signature text NOT NULL,
    bucket_id text NOT NULL,
    key text NOT NULL COLLATE pg_catalog."C",
    version text NOT NULL,
    owner_id text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    user_metadata jsonb
);


--
-- Name: s3_multipart_uploads_parts; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.s3_multipart_uploads_parts (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    upload_id text NOT NULL,
    size bigint DEFAULT 0 NOT NULL,
    part_number integer NOT NULL,
    bucket_id text NOT NULL,
    key text NOT NULL COLLATE pg_catalog."C",
    etag text NOT NULL,
    owner_id text,
    version text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: vector_indexes; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.vector_indexes (
    id text DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL COLLATE pg_catalog."C",
    bucket_id text NOT NULL,
    data_type text NOT NULL,
    dimension integer NOT NULL,
    distance_metric text NOT NULL,
    metadata_configuration jsonb,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: refresh_tokens id; Type: DEFAULT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.refresh_tokens ALTER COLUMN id SET DEFAULT nextval('auth.refresh_tokens_id_seq'::regclass);


--
-- Name: _posts_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._posts_v ALTER COLUMN id SET DEFAULT nextval('public._posts_v_id_seq'::regclass);


--
-- Name: _posts_v_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._posts_v_rels ALTER COLUMN id SET DEFAULT nextval('public._posts_v_rels_id_seq'::regclass);


--
-- Name: booths id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.booths ALTER COLUMN id SET DEFAULT nextval('public.booths_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: concepts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.concepts ALTER COLUMN id SET DEFAULT nextval('public.concepts_id_seq'::regclass);


--
-- Name: gallery id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gallery ALTER COLUMN id SET DEFAULT nextval('public.gallery_id_seq'::regclass);


--
-- Name: leads id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.leads ALTER COLUMN id SET DEFAULT nextval('public.leads_id_seq'::regclass);


--
-- Name: media id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.media ALTER COLUMN id SET DEFAULT nextval('public.media_id_seq'::regclass);


--
-- Name: payload_kv id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_kv ALTER COLUMN id SET DEFAULT nextval('public.payload_kv_id_seq'::regclass);


--
-- Name: payload_locked_documents id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents ALTER COLUMN id SET DEFAULT nextval('public.payload_locked_documents_id_seq'::regclass);


--
-- Name: payload_locked_documents_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels ALTER COLUMN id SET DEFAULT nextval('public.payload_locked_documents_rels_id_seq'::regclass);


--
-- Name: payload_migrations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_migrations ALTER COLUMN id SET DEFAULT nextval('public.payload_migrations_id_seq'::regclass);


--
-- Name: payload_preferences id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_preferences ALTER COLUMN id SET DEFAULT nextval('public.payload_preferences_id_seq'::regclass);


--
-- Name: payload_preferences_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_preferences_rels ALTER COLUMN id SET DEFAULT nextval('public.payload_preferences_rels_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: posts_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts_rels ALTER COLUMN id SET DEFAULT nextval('public.posts_rels_id_seq'::regclass);


--
-- Name: settings id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.settings ALTER COLUMN id SET DEFAULT nextval('public.settings_id_seq'::regclass);


--
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.audit_log_entries (instance_id, id, payload, created_at, ip_address) FROM stdin;
\.


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.flow_state (id, user_id, auth_code, code_challenge_method, code_challenge, provider_type, provider_access_token, provider_refresh_token, created_at, updated_at, authentication_method, auth_code_issued_at) FROM stdin;
\.


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.identities (provider_id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at, id) FROM stdin;
\.


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.instances (id, uuid, raw_base_config, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.mfa_amr_claims (session_id, created_at, updated_at, authentication_method, id) FROM stdin;
\.


--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.mfa_challenges (id, factor_id, created_at, verified_at, ip_address, otp_code, web_authn_session_data) FROM stdin;
\.


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.mfa_factors (id, user_id, friendly_name, factor_type, status, created_at, updated_at, secret, phone, last_challenged_at, web_authn_credential, web_authn_aaguid, last_webauthn_challenge_data) FROM stdin;
\.


--
-- Data for Name: oauth_authorizations; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.oauth_authorizations (id, authorization_id, client_id, user_id, redirect_uri, scope, state, resource, code_challenge, code_challenge_method, response_type, status, authorization_code, created_at, expires_at, approved_at, nonce) FROM stdin;
\.


--
-- Data for Name: oauth_client_states; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.oauth_client_states (id, provider_type, code_verifier, created_at) FROM stdin;
\.


--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.oauth_clients (id, client_secret_hash, registration_type, redirect_uris, grant_types, client_name, client_uri, logo_uri, created_at, updated_at, deleted_at, client_type) FROM stdin;
\.


--
-- Data for Name: oauth_consents; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.oauth_consents (id, user_id, client_id, scopes, granted_at, revoked_at) FROM stdin;
\.


--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.one_time_tokens (id, user_id, token_type, token_hash, relates_to, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.refresh_tokens (instance_id, id, token, user_id, revoked, created_at, updated_at, parent, session_id) FROM stdin;
\.


--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.saml_providers (id, sso_provider_id, entity_id, metadata_xml, metadata_url, attribute_mapping, created_at, updated_at, name_id_format) FROM stdin;
\.


--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.saml_relay_states (id, sso_provider_id, request_id, for_email, redirect_to, created_at, updated_at, flow_state_id) FROM stdin;
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.schema_migrations (version) FROM stdin;
20171026211738
20171026211808
20171026211834
20180103212743
20180108183307
20180119214651
20180125194653
00
20210710035447
20210722035447
20210730183235
20210909172000
20210927181326
20211122151130
20211124214934
20211202183645
20220114185221
20220114185340
20220224000811
20220323170000
20220429102000
20220531120530
20220614074223
20220811173540
20221003041349
20221003041400
20221011041400
20221020193600
20221021073300
20221021082433
20221027105023
20221114143122
20221114143410
20221125140132
20221208132122
20221215195500
20221215195800
20221215195900
20230116124310
20230116124412
20230131181311
20230322519590
20230402418590
20230411005111
20230508135423
20230523124323
20230818113222
20230914180801
20231027141322
20231114161723
20231117164230
20240115144230
20240214120130
20240306115329
20240314092811
20240427152123
20240612123726
20240729123726
20240802193726
20240806073726
20241009103726
20250717082212
20250731150234
20250804100000
20250901200500
20250903112500
20250904133000
20250925093508
20251007112900
20251104100000
20251111201300
20251201000000
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.sessions (id, user_id, created_at, updated_at, factor_id, aal, not_after, refreshed_at, user_agent, ip, tag, oauth_client_id, refresh_token_hmac_key, refresh_token_counter, scopes) FROM stdin;
\.


--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.sso_domains (id, sso_provider_id, domain, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.sso_providers (id, resource_id, created_at, updated_at, disabled) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, invited_at, confirmation_token, confirmation_sent_at, recovery_token, recovery_sent_at, email_change_token_new, email_change, email_change_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, is_super_admin, created_at, updated_at, phone, phone_confirmed_at, phone_change, phone_change_token, phone_change_sent_at, email_change_token_current, email_change_confirm_status, banned_until, reauthentication_token, reauthentication_sent_at, is_sso_user, deleted_at, is_anonymous) FROM stdin;
\.


--
-- Data for Name: _posts_v; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public._posts_v (id, parent_id, version_title, version_slug, version_excerpt, version_content, version_featured_image_id, version_published_at, version_seo_title, version_seo_meta_description, version_seo_canonical_url, version_seo_json_ld, version_updated_at, version_created_at, version__status, created_at, updated_at, latest) FROM stdin;
1	1	5 Reasons Your Wedding Needs a Photo Booth	5-reasons-your-wedding-needs-a-photo-booth	Thinking about a photo booth for your wedding? Here are 5 compelling reasons why it's a fantastic idea.	<h2>1. Entertainment for All Ages</h2><p>From your youngest cousins to your great-aunt, everyone loves a photo booth...</p><h2>2. A Perfect Icebreaker</h2><p>It gets guests mingling and laughing...</p><h2>3. Instant Party Favors</h2><p>Guests leave with a personalized memento...</p><h2>4. Create a Unique Guestbook</h2><p>Have guests stick a copy of their photo strip in a book and write a message...</p><h2>5. Captures Fun, Candid Moments</h2><p>While your photographer captures the formal shots, the booth captures the silly, candid moments...</p>	7	2023-10-26 10:00:00+00	5 Reasons Your Wedding Needs a Photo Booth	Thinking about a photo booth for your wedding? Here are 5 compelling reasons why it's a fantastic idea.	\N	\N	2025-12-19 06:57:29.438+00	2025-12-19 06:57:29.437+00	draft	2025-12-19 06:57:29.547+00	2025-12-19 06:57:29.547+00	t
2	2	How to Use a Photo Booth for Brand Activation	how-to-use-a-photo-booth-for-brand-activation	A photo booth is more than just fun; it's a powerful tool for marketing. Here's how to maximize its potential.	<h2>1. Branded Everything</h2><p>Custom backdrops, branded photo overlays, and a custom-wrapped booth...</p><h2>2. Social Media Integration</h2><p>Encourage sharing with a custom hashtag and instant social uploads...</p><h2>3. Data Capture</h2><p>Collect emails or survey responses in a fun, non-intrusive way...</p>	7	2023-10-20 10:00:00+00	How to Use a Photo Booth for Brand Activation	A photo booth is more than just fun; it's a powerful tool for marketing. Here's how to maximize its potential.	\N	\N	2025-12-19 06:57:30.84+00	2025-12-19 06:57:30.84+00	draft	2025-12-19 06:57:31.01+00	2025-12-19 06:57:31.01+00	t
3	3	The Best Way to Share Eid Greetings and Fun with PartyBox Mirror Photo Booth in UAE	the-best-way-to-share-eid-greetings-and-fun-with-partybox-mirror-photo-booth-in-uae	The Best Way to Share Eid Greetings and Fun with PartyBox Mirror Photo Booth in UAE - Partybox Photobooth Blog Celebrate Eid in style with the PartyBox Mirror Photo Booth! Capture high-quality photos, add Eid-themed props, and instantly share personalized Eid greetings with loved ones. Book your PartyBox Mirror Booth today! Visit partybox.ae	\n<p></p>\n\n\n\n<p>Eid is all about <strong>spreading joy, celebrating with loved ones, and making memories</strong>! 🕌✨ Whether you’re hosting a <strong>family gathering, corporate event, or community celebration</strong>, the <strong>PartyBox Mirror Photo Booth</strong> is the ultimate way to capture the festive spirit and share your <strong>Eid greetings in style!</strong></p>\n\n\n\n<h3 class="wp-block-heading"><strong>1. Make Every Eid Greeting Personal &amp; Fun! 🎉</strong></h3>\n\n\n\n<p>Instead of a simple “Eid Mubarak” message, let your guests <strong>create their own personalized Eid greetings</strong> with the interactive <strong>PartyBox Mirror Booth</strong>! ✅ <strong>Write personal messages on the mirror touchscreen</strong> ✍️ ✅ <strong>Take high-quality, print-worthy photos instantly</strong> 📸 ✅ <strong>Customize each print with an Eid Mubarak frame</strong> 🖼️</p>\n\n\n\n<p><strong>Bring the PartyBox Mirror Booth to your Eid celebration!</strong> <a href="https://partybox.ae/">Visit PartyBox.ae</a></p>\n\n\n\n<h3 class="wp-block-heading"><strong>2. Eid-Themed Props for Extra Fun! 🌙✨</strong></h3>\n\n\n\n<p>No photo booth is complete without <strong>props that match the celebration!</strong> Add an <strong>Eid touch</strong> with:</p>\n\n\n\n<ul class="wp-block-list">\n<li>“Eid Mubarak” &amp; “Ramadan Kareem” handheld signs</li>\n\n\n\n<li>Crescent moon &amp; lantern cutouts 🌙🏮</li>\n\n\n\n<li>Traditional accessories like abayas &amp; keffiyehs</li>\n\n\n\n<li>Gold &amp; silver balloons for a festive backdrop 🎈</li>\n</ul>\n\n\n\n<h3 class="wp-block-heading"><strong>3. Instantly Share Eid Greetings with Family &amp; Friends 📱</strong></h3>\n\n\n\n<p>Make your Eid celebration <strong>social media-worthy</strong> by letting guests: 📲 <strong>Instantly share their photos</strong> on Instagram, Facebook &amp; WhatsApp!<br>📲 <strong>Tag family &amp; friends in their personalized Eid greeting!</strong><strong><br></strong>📲 <strong>Use a fun Eid-themed digital filter to make it extra special!</strong></p>\n\n\n\n<h3 class="wp-block-heading"><strong>4. Make Your Eid Celebration One to Remember! 🎊</strong></h3>\n\n\n\n<p>Whether you’re hosting an <strong>Eid dinner, office party, or community event</strong>, the <strong>PartyBox Mirror Photo Booth</strong> ensures that every guest leaves with a <strong>beautiful keepsake and unforgettable experience</strong>.</p>\n\n\n\n<p>📩 <strong>Book your PartyBox Mirror Booth today!</strong> Email us at <strong>info@partybox.ae</strong> or visit <a href="https://partybox.ae/"><strong>partybox.ae</strong></a>.</p>\n\n\n\n<p></p>\n	27	2025-03-18 02:56:12+00	The Best Way to Share Eid Greetings and Fun with PartyBox Mirror Photo Booth in UAE - Partybox Photobooth Blog The Best Way to Share Eid Greetings and Fun with PartyBox Mirror Photo Booth in UAE	The Best Way to Share Eid Greetings and Fun with PartyBox Mirror Photo Booth in UAE - Partybox Photobooth Blog Celebrate Eid in style with the PartyBox Mirror P	\N	\N	2025-12-19 07:19:09.767+00	2025-12-19 07:19:09.766+00	draft	2025-12-19 07:19:09.875+00	2025-12-19 07:19:09.875+00	t
4	4	Unique Ideas to Make Your Traditional Event Stand Out with PartyBox 120 Slider	unique-ideas-to-make-your-traditional-event-stand-out-with-partybox-120slider	Unique Ideas to Make Your Traditional Event Stand Out with PartyBox 120 Slider - Partybox Photobooth Blog	\n<p>Traditional events are all about <strong>celebrating culture, creating memories, and bringing people together</strong>! 🏮✨ If you want to add a <strong>modern, fun, and interactive</strong> element to your next <strong>Eid celebration, wedding, or cultural event</strong>, the <strong>PartyBox 120 Slider</strong> is your perfect match! 📸 Here’s how you can make your event unforgettable with this <strong>dynamic video booth experience</strong>.</p>\n\n\n\n<h3 class="wp-block-heading"><strong>1. What is the PartyBox 120 Slider? 🎥✨</strong></h3>\n\n\n\n<p>Unlike traditional photo booths, the <strong>PartyBox 120 Slider</strong> captures <strong>smooth, slow-motion 120-degree videos</strong> that give guests a <strong>cinematic experience</strong>. It’s like <strong>a mini red-carpet moment for everyone at your event!</strong></p>\n\n\n\n<p>✅ <strong>Creates stunning boomerang-style videos</strong> ✅ <strong>Adds motion effects for a dramatic touch</strong> ✅ <strong>Instant digital sharing for social media buzz</strong></p>\n\n\n\n<p>&nbsp;<strong>See how PartyBox 120 Slider takes events to the next level!</strong> <a href="https://www.youtube.com/watch?v=M48azd5whPg">Check it out here.</a></p>\n\n\n\n<h3 class="wp-block-heading"><strong>2. Themed Backdrops to Match Your Traditional Event 🏛️🎊</strong></h3>\n\n\n\n<p>A <strong>custom backdrop</strong> enhances the magic of the <strong>120-degree slow-motion effect</strong>! Here are some ideas:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Elegant Arabic Calligraphy Designs</strong> – Perfect for an <strong>Eid or Ramadan gathering</strong>.</li>\n\n\n\n<li><strong>Golden Majlis Setup</strong> – Adds a <strong>luxurious Emirati feel</strong> to your celebration.</li>\n\n\n\n<li><strong>Floral &amp; Vintage Vibes</strong> – Great for <strong>weddings and special family occasions</strong>.</li>\n\n\n\n<li><strong>Cityscape of Your Homeland</strong> – Showcasing <strong>beautiful UAE landmarks</strong> as a backdrop.</li>\n</ul>\n\n\n\n<h3 class="wp-block-heading"><strong>3. Props to Elevate the Fun! 🎭📸</strong></h3>\n\n\n\n<p>Props make every shot unique! Choose from <strong>fun and traditional</strong> options:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Emirati flags &amp; cultural items</strong> 🇦🇪</li>\n\n\n\n<li><strong>Lanterns &amp; crescent moons for Eid</strong> 🌙</li>\n\n\n\n<li><strong>Golden picture frames for a royal touch</strong> 🖼️</li>\n\n\n\n<li><strong>Themed headpieces &amp; accessories</strong> 👑</li>\n</ul>\n\n\n\n<h3 class="wp-block-heading"><strong>4. Why Your Guests Will LOVE It! ❤️</strong></h3>\n\n\n\n<p>🎥 <strong>It’s an experience, not just a photo booth!</strong><strong><br></strong>🎥 <strong>Instant social media sharing = More engagement!</strong><strong><br></strong>🎥 <strong>Creates premium, high-quality videos that guests will keep forever!</strong></p>\n\n\n\n<p>📩 <strong>Make your traditional event unforgettable with Partybox 120 slider!</strong> Email us at <strong>info@partybox.ae</strong> or visit <a href="https://partybox.ae/"><strong>partybox.ae</strong></a>.</p>\n	28	2025-03-18 02:52:51+00	Unique Ideas to Make Your Traditional Event Stand Out with PartyBox 120 Slider - Partybox Photobooth Blog Unique Ideas to Make Your Traditional Event Stand Out with PartyBox 120 Slider	Unique Ideas to Make Your Traditional Event Stand Out with PartyBox 120 Slider - Partybox Photobooth Blog	\N	\N	2025-12-19 07:19:11.537+00	2025-12-19 07:19:11.536+00	draft	2025-12-19 07:19:11.643+00	2025-12-19 07:19:11.643+00	t
5	5	Capturing Memories and Creating Fun – Include PartyBox Mirror at Your Eid Celebration Party	capturing-memories-creating-fun-include-partybox-mirror-at-your-eid-celebration-party	Capturing Memories and Creating Fun – Include PartyBox Mirror at Your Eid Celebration Party - Partybox Photobooth Blog	\n<p></p>\n\n\n\n<p>Eid celebrations are all about <strong>family, laughter, and unforgettable moments</strong>! 🎉 If you’re looking for a way to <strong>capture the joy</strong> and <strong>add a touch of magic</strong> to your party, the <strong>PartyBox Mirror Booth</strong> is the perfect addition. Here’s why this interactive photo booth will make your <strong>Eid celebration party</strong> one to remember! 📸✨</p>\n\n\n\n<h3 class="wp-block-heading"><strong>1. The Ultimate Interactive Experience 🪞✨</strong></h3>\n\n\n\n<p>The <strong>PartyBox Mirror Booth</strong> isn’t just a photo booth—it’s an <strong>interactive experience</strong> that keeps guests entertained! Here’s what makes it special:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Touchscreen fun</strong> – Guests can <strong>sign their names</strong> or add emojis to their photos.</li>\n\n\n\n<li><strong>Instant prints</strong> – Walk away with a <strong>beautifully framed keepsake</strong> from the celebration.</li>\n\n\n\n<li><strong>Eid-themed animations &amp; frames</strong> – Custom-designed overlays to match your party’s vibe.</li>\n</ul>\n\n\n\n<p><strong>Upgrade your Eid celebration with the PartyBox Mirror Booth!</strong><a href="https://www.youtube.com/shorts/l08JB6uupzY"> Explore Here</a></p>\n\n\n\n<h3 class="wp-block-heading"><strong>2. Elevate Your Eid Celebration with Stunning Photos 📸🎊</strong></h3>\n\n\n\n<p>No Eid party is complete without <strong>capturing those special moments</strong>! The <strong>PartyBox Mirror Booth</strong> lets you: ✅ <strong>Take high-quality, studio-style photos</strong> ✨ ✅ <strong>Get creative with themed props &amp; festive backdrops</strong> 🎭 ✅ <strong>Print unlimited photos instantly</strong> 📸 ✅ <strong>Share digital copies right away!</strong> 📱</p>\n\n\n\n<h3 class="wp-block-heading"><strong>3. Fun Eid Props to Make Your Photos POP! 🎭</strong></h3>\n\n\n\n<p>Make every photo extra special with <strong>Eid-themed props</strong> like:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>“Eid Mubarak” speech bubbles</strong></li>\n\n\n\n<li><strong>Crescent moon &amp; lantern cutouts</strong> 🌙🏮</li>\n\n\n\n<li><strong>Golden picture frames</strong> for a classy touch</li>\n\n\n\n<li><strong>Traditional accessories like keffiyehs &amp; abayas</strong></li>\n</ul>\n\n\n\n<h3 class="wp-block-heading"><strong>4. Hassle-Free, Fun-Filled Setup! 🚀</strong></h3>\n\n\n\n<p>The <strong>PartyBox team</strong> takes care of everything—<strong>from setup to breakdown</strong>—so you can focus on enjoying your celebration. Just <strong>smile, pose, and let the Mirror Booth do the magic!</strong></p>\n\n\n\n<p>📩 <strong>Book your PartyBox Mirror Booth today!</strong> Email us at <strong>info@partybox.ae</strong> or visit <a href="https://partybox.ae/"><strong>partybox.ae</strong></a>.</p>\n	29	2025-03-18 02:31:06+00	Capturing Memories and Creating Fun – Include PartyBox Mirror at Your Eid Celebration Party - Partybox Photobooth Blog Capturing Memories and Creating Fun – Include PartyBox Mirror at Your Eid Celebration Party	Capturing Memories and Creating Fun – Include PartyBox Mirror at Your Eid Celebration Party - Partybox Photobooth Blog	\N	\N	2025-12-19 07:19:14.536+00	2025-12-19 07:19:14.536+00	draft	2025-12-19 07:19:14.639+00	2025-12-19 07:19:14.639+00	t
6	6	From Backdrops to Props: Designing the Perfect Eid Gathering Party Photo Booth at Your Home	designing-perfect-eid-gathering-party-photo-booth-at-home	From Backdrops to Props: Designing the Perfect Eid Gathering Party Photo Booth at Your Home - Partybox Photobooth Blog Create an unforgettable Eid gathering party photo booth at home! From stunning Eid backdrops to festive props, interactive Mirror Booth features, and customized prints, turn every click into a keepsake. Book your Eid photo booth today! Visit partybox.ae	\n<p></p>\n\n\n\n<p>Eid is all about family, friends, and creating <strong>joyful memories</strong>. What better way to capture those moments than with a <strong>PartyBox photo booth</strong> at home? 🏡✨ Whether you’re planning a <strong>big Eid gathering</strong> or an <strong>intimate celebration</strong>, the right backdrops and props can <strong>elevate the fun</strong> and turn every click into a keepsake!</p>\n\n\n\n<h3 class="wp-block-heading"><strong>1. Set the Scene with a Stunning Eid Backdrop 🌙🕌</strong></h3>\n\n\n\n<p>A <strong>beautiful backdrop</strong> is the foundation of an amazing <strong>Eid gathering party photo booth</strong>! Here are some fun ideas to match your celebration’s vibe:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Golden Ramadan Glow:</strong> Elegant gold and white décor with fairy lights and crescent moon cutouts.</li>\n\n\n\n<li><strong>Arabian Nights:</strong> Deep blues, purples, and gold accents with plush cushions and Moroccan lanterns.</li>\n\n\n\n<li><strong>Floral Eid Magic:</strong> A flower wall with “Eid Mubarak” in calligraphy.</li>\n\n\n\n<li><strong>Minimalist Elegance:</strong> A simple white curtain backdrop with LED string lights for a classy look.</li>\n</ul>\n\n\n\n<p>🔗 <strong>Find the perfect PartyBox backdrop for your Eid event:</strong> <a href="https://partybox.ae/">Visit PartyBox.ae</a></p>\n\n\n\n<h3 class="wp-block-heading"><strong>2. Must-Have Props for Your Eid Photo Booth 🎭✨</strong></h3>\n\n\n\n<p>Props bring <strong>energy and personality</strong> to every picture! Get creative with these Eid-themed photo booth props:</p>\n\n\n\n<p>✅ <strong>Handheld Signs:</strong> “Eid Mubarak,” “Halal Selfie,” or “Where’s My Biryani?” ✅ <strong>Traditional Accessories:</strong> Keffiyehs, abayas, and decorative prayer beads. ✅ <strong>Festive Items:</strong> Mini lanterns, crescent moon wands, and golden confetti. ✅ <strong>Food-Themed Fun:</strong> Hold up giant falafel, baklava, or Arabic coffee cups for a <strong>quirky twist</strong>!</p>\n\n\n\n<h3 class="wp-block-heading"><strong>3. Add a Touch of Magic with the PartyBox Mirror Booth! 🪞✨</strong></h3>\n\n\n\n<p>Make your <strong>Eid celebration photo booth</strong> interactive with the <strong>PartyBox Mirror Booth</strong>:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Touchscreen animations &amp; fun prompts</strong> 🖊️</li>\n\n\n\n<li><strong>Instant prints with custom Eid frames</strong> 🖼️</li>\n\n\n\n<li><strong>Guests can sign their names on photos</strong> ✍🏼</li>\n</ul>\n\n\n\n<p><strong>Upgrade your Eid celebration with the PartyBox Mirror Booth!</strong><a href="https://www.youtube.com/shorts/l08JB6uupzY"> Explore Here</a></p>\n\n\n\n<h3 class="wp-block-heading"><strong>4. Keep It Personal &amp; Share the Fun! 🎉📱</strong></h3>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Customized Eid Cards:</strong> Let guests take home their photos with a <strong>personalized Eid Mubarak message</strong>.</li>\n\n\n\n<li><strong>Digital Sharing:</strong> Guests can <strong>instantly share</strong> their photos on social media.</li>\n\n\n\n<li><strong>Create a Memory Wall:</strong> Print photos and stick them on a <strong>photo collage board</strong>!</li>\n</ul>\n\n\n\n<h3 class="wp-block-heading"><strong>5. Get Ready for the Ultimate Eid Celebration! 🎊</strong></h3>\n\n\n\n<p>Your <strong>Eid gathering at home</strong> deserves <strong>fun, laughter, and the best memories captured forever</strong>. With <strong>PartyBox photo booths, props, and backdrops</strong>, every click turns into a keepsake!</p>\n\n\n\n<p>📩 <strong>Book your Eid photo booth today!</strong> Email us at <strong>info@partybox.ae</strong> or visit <a href="https://partybox.ae/"><strong>partybox.ae</strong></a>.</p>\n	30	2025-03-18 02:27:42+00	From Backdrops to Props: Designing the Perfect Eid Gathering Party Photo Booth at Your Home - Partybox Photobooth Blog Designing the Perfect Eid Gathering Party Photo Booth at Home	From Backdrops to Props: Designing the Perfect Eid Gathering Party Photo Booth at Your Home - Partybox Photobooth Blog Create an unforgettable Eid gathering par	\N	\N	2025-12-19 07:19:16.532+00	2025-12-19 07:19:16.532+00	draft	2025-12-19 07:19:16.638+00	2025-12-19 07:19:16.638+00	t
7	7	The Ultimate Guide to Iftar Party Photo Booth Props and Themes	iftar-party-photo-booth-props	The Ultimate Guide to Iftar Party Photo Booth Props and Themes - Partybox Photobooth Blog Make your Iftar party unforgettable with a PartyBox photo booth! 🌙✨ From Arabian Nights backdrops to Ramadan-themed props, interactive Mirror Booth fun, and branded prints, create a memorable experience for family gatherings, corporate Iftars, and community events. 📸 Book your Iftar photo booth today! Visit partybox.ae	\n<p>Ramadan is a time of reflection, togetherness, and of course—celebrations! As the sun sets and families gather for <strong>Iftar</strong>, why not make the moment extra special with a <strong>PartyBox photo booth</strong>? 📸✨ Whether you&#8217;re hosting an intimate family gathering or a big community iftar, the right <strong>photo booth props and themes</strong> can take your event from simple to spectacular! Here’s your <strong>ultimate guide</strong> to setting up the best Iftar party photo booth.</p>\n\n\n\n<h3 class="wp-block-heading"><strong>1. Choose the Perfect Iftar Party Theme 🌙✨</strong></h3>\n\n\n\n<p>Themes set the mood and add a <strong>cohesive aesthetic</strong> to your event. Here are some trendy Iftar <strong>photo booth themes</strong> that will make your pictures pop:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Arabian Nights</strong>: Think <strong>gold accents, ornate lanterns, and deep blue backdrops</strong>.</li>\n\n\n\n<li><strong>Modern Minimalist Ramadan</strong>: A sleek white and gold design with elegant calligraphy.</li>\n\n\n\n<li><strong>Starry Ramadan Sky</strong>: Deep navy tones with <strong>twinkling lights</strong> and crescent moons.</li>\n\n\n\n<li><strong>Traditional Majlis Setup</strong>: A rich red and gold majlis backdrop with cushions and coffee pots.</li>\n</ul>\n\n\n\n<h3 class="wp-block-heading"><strong>2. Must-Have Iftar Photo Booth Props 🏮🕌</strong></h3>\n\n\n\n<p>Props make the experience more engaging and fun for guests! Here are some must-haves:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Handheld Ramadan Signs</strong>: “Eid Mubarak,” “Iftar Time!,” or “Fasting Mode: Off!”</li>\n\n\n\n<li><strong>Traditional Tea &amp; Coffee Cups</strong> ☕️: Authentic Emirati-style props for that cultural touch.</li>\n\n\n\n<li><strong>Lanterns &amp; Crescent Moons</strong> 🌙: Classic symbols of Ramadan for a magical glow.</li>\n\n\n\n<li><strong>Decorated Prayer Mats &amp; Tasbih (Prayer Beads)</strong>: Adds an <strong>authentic spiritual element</strong> to the photos.</li>\n\n\n\n<li><strong>Golden Picture Frames</strong>: Give guests a way to frame their favorite moments beautifully.</li>\n</ul>\n\n\n\n<p>&nbsp;<strong>See how PartyBox photo booths create unforgettable moments:</strong> <a href="https://www.youtube.com/watch?v=6LXRnUkYq3g">Watch on YouTube</a></p>\n\n\n\n<h3 class="wp-block-heading"><strong>3. Interactive Photo Booth Fun with PartyBox Mirror! 🪞✨</strong></h3>\n\n\n\n<p>Take your <strong>Iftar photo booth experience</strong> to the next level with the <strong>PartyBox Mirror Booth</strong>. It’s not just a camera—it’s an interactive <strong>touchscreen mirror</strong> that lets guests: ✅ Strike a pose with <strong>fun Ramadan-themed animations</strong> ✅ Sign their names or add personal messages to photos ✅ Get instant prints with <strong>customized Ramadan frames</strong></p>\n\n\n\n<p><strong>Upgrade your Iftar party with the PartyBox Mirror Booth:</strong> <a href="https://www.youtube.com/shorts/l08JB6uupzY">Explore Here</a></p>\n\n\n\n<h3 class="wp-block-heading"><strong>4. Customizing Your Photo Booth for a Personal Touch 🖌️</strong></h3>\n\n\n\n<p>Make your <strong>Iftar celebration unique</strong> by personalizing your <strong>photo booth setup</strong>:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Customized Ramadan Backdrops</strong>: Feature <strong>family names, company logos, or a special Ramadan greeting</strong>.</li>\n\n\n\n<li><strong>Branded Prints</strong>: Add a <strong>Ramadan Kareem message</strong> on every photo strip.</li>\n\n\n\n<li><strong>Personalized QR Codes</strong>: Let guests <strong>download and share their photos instantly</strong>.</li>\n</ul>\n\n\n\n<h3 class="wp-block-heading"><strong>5. Create a Social Media Buzz! 📱</strong></h3>\n\n\n\n<p>Encourage guests to <strong>share their Iftar photo booth moments</strong> by setting up a <strong>social media corner</strong>: 🚀 <strong>Create a custom event hashtag</strong> (e.g., #IftarWithPartyBox)<br>🚀 <strong>Set up an Instagram-friendly backdrop</strong> for extra photos<br>🚀 <strong>Live Display:</strong> Showcase guest photos on a big screen for <strong>real-time fun</strong></p>\n\n\n\n<h3 class="wp-block-heading"><strong>Make Your Iftar Party Unforgettable with PartyBox! 🎊</strong></h3>\n\n\n\n<p>Adding a <strong>photo booth with the perfect props and themes</strong> turns your Iftar gathering into a truly <strong>unforgettable experience</strong>. Whether you’re hosting a <strong>corporate iftar, a family event, or a Ramadan community gathering</strong>, <strong>PartyBox has the perfect photo booth for you!</strong></p>\n\n\n\n<p>📩 <strong>Book your Iftar photo booth today!</strong> Email us at <strong>info@partybox.ae</strong> or visit <a href="https://partybox.ae/"><strong>partybox.ae</strong></a>.</p>\n\n\n\n<p></p>\n	31	2025-03-18 02:23:12+00	The Ultimate Guide to Iftar Party Photo Booth Props and Themes - Partybox Photobooth Blog Iftar Party Photo Booth Props	The Ultimate Guide to Iftar Party Photo Booth Props and Themes - Partybox Photobooth Blog Make your Iftar party unforgettable with a PartyBox photo booth! 🌙✨ F	\N	\N	2025-12-19 07:19:18.413+00	2025-12-19 07:19:18.413+00	draft	2025-12-19 07:19:18.581+00	2025-12-19 07:19:18.581+00	t
8	8	Reasons to Throw a Graduate Party with Loved Ones	reasons-to-throw-a-graduate-party-with-loved-ones	Reasons to Throw a Graduate Party with Loved Ones. A 360 Photo booth Rental option should be included to capture all moments of your guests for their whole life.	\n<p>Celebrating your success with your loved ones is mandatory to mark the era with victory. Whether you have won a business deal or graduated from high school, the celebration is a must, and you must include everyone in the party with whom you feel comfortable. However, celebrating the graduation party with your friends and family will give you much pleasure, and it is the best way to mark the end of the era. After spending a dedicated life on your studies, it is time to start your new professional career. Everyone should be part of the graduation party, and you can create memories with them. Say goodbye to overnight studies and get ready to welcome your professional life to choose the way you dream for a long time. Never forget to create memories of the day to save them in your album and share them with your friends on social media.</p>\n\n\n\n<h2 class="wp-block-heading">Why Do You Plan to Throw a Graduate Party?</h2>\n\n\n\n<p>You have to celebrate the big success of your life with your loved ones. Your family and friends will join you to congratulate you on your achievement, and they will share their best wishes for the future. It is the best moment to share with everyone, and a graduate party should include an <strong><u>AI Photo booth rental Dubai</u></strong> option to create your memories for your whole life. It is one of the best solutions that will click your graduate party photos with a special background, and you must have props for the guests to take in their hands for the photos.</p>\n\n\n\n<p>Laugh, enjoy, and celebrate the day with lots of joy and happiness with your loved ones. If your house is spacious enough for this party, throwing a party in the outdoor area would be a good decision. You can better decide the venue according to the guests. If asked why you are throwing a party, you must have some reasons to tell anyone. Here is a simple solution for everyone:</p>\n\n\n\n<h2 class="wp-block-heading">Reasons You Are Throwing a Graduate Party</h2>\n\n\n\n<p>Completing the graduation is a milestone you have cleared with your deep effort. Restless nights, overnight studies, and future plans will motivate you to achieve your targeted goals immediately. Here are some reasons to celebrate this big achievement with your friends and family.</p>\n\n\n\n<h3 class="wp-block-heading">1.&nbsp;&nbsp;&nbsp;&nbsp; You are Celebrating an Amazing Achievement</h3>\n\n\n\n<p>Undoubtedly, graduating from high school. College, or grad school, is a big milestone in anyone’s life. If you want to start further studies after graduation to explore the world, you must celebrate the moment of joy with your close relatives and friends. It is the perfect time to joyfully celebrate your past, present, and future. You must choose the best venue for the graduation party and invite everyone.</p>\n\n\n\n<h3 class="wp-block-heading">2.&nbsp;&nbsp;&nbsp;&nbsp; Celebration for the Start of the New Era</h3>\n\n\n\n<p>Graduating from grad school indicates that you will start a new era. You are free to share your expressions with all guests. Everyone will appreciate your effort, and you will surely get best wishes for the future. Everyone has to celebrate this day with their loved ones and focus on future goals sincerely.</p>\n\n\n\n<h3 class="wp-block-heading">3.&nbsp;&nbsp;&nbsp;&nbsp; Allow Your Well-Wishers to Celebrate the Big Day with You</h3>\n\n\n\n<p>You need to create a guest list for the party. Make sure to include all close relatives and friends. Decide the day, time, and venue to share updates with your guests. You need to choose the best venue whether you will throw the success party at your home or outside the premises. A <strong><u><a href="https://partybox.ae/">360 Photobooth</a></u></strong> option should be included to capture all moments of your guests for their whole life. Send invitations carefully and make sure you have invited everyone to the party.</p>\n\n\n\n<h3 class="wp-block-heading">4.&nbsp;&nbsp;&nbsp;&nbsp; It is Not an Expensive Party Like Others</h3>\n\n\n\n<p>Usually, graduates prefer to celebrate their success with everyone by throwing a party because this type of party is quite different from other OTT parties. It is up to you what type of party you want to arrange and what budget you have maintained for the celebration.</p>\n\n\n\n<h3 class="wp-block-heading">5.&nbsp;&nbsp;&nbsp;&nbsp; It’s a Chance to Mark the End of an Era</h3>\n\n\n\n<p>Finally, this celebration has a big reason: you will mark an era&#8217;s end. It is the time to start exploring the opportunities to achieve your dream goals. This would be a remarkable day that no one will forget. Thank your parents, teachers, and all well-wishers for achieving your targeted goal. An attractive and full of emotional speech should be your parents to say thank you for their effort. Enjoy the party time.</p>\n	32	2025-01-17 07:32:08+00	Reasons to Throw a Graduate Party with Loved Ones - Photo Booth	Reasons to Throw a Graduate Party with Loved Ones. A 360 Photo booth Rental option should be included to capture all moments of your guests for their whole life	\N	\N	2025-12-19 07:19:20.971+00	2025-12-19 07:19:20.971+00	draft	2025-12-19 07:19:21.072+00	2025-12-19 07:19:21.072+00	t
9	9	How Effectively Can You Plan Valentine’s Day for Your Beloved Wife in 2025?	how-effectively-can-you-plan-valentines-day-for-your-beloved-wife-in-2025	How Effectively Can You Plan Valentine’s Day for Your Beloved Wife in 2025? A Photobooth is Compulsory for the Day.	\n<p>We all know Valentine’s Day is approaching in 2025, and you must make this day more special for your wife. It is the day everyone can express their love and feelings to their loved ones. You must consider it important to choose flowers for Valentine’s Day to make her day more luxurious by presenting a fresh flower bouquet. A Valentine’s Day can be more special if you choose fresh and beautiful flowers for your beloved wife to show your love and feelings. We do not need a special day to express our love and feelings to someone in our life. This day is more special for everyone and will deliver your message to others.</p>\n\n\n\n<h2 class="wp-block-heading">How to Make Her Day Perfect?</h2>\n\n\n\n<p>This Valentine’s, you can make your wife happier by planning several things that will be perfect. You must read the whole discussion until the end to understand everything perfectly. Everything will get set perfectly, and you might find these options more impressive and useful.</p>\n\n\n\n<h3 class="wp-block-heading">1.&nbsp;&nbsp;&nbsp;&nbsp; Start the Day with a Beautiful Gift</h3>\n\n\n\n<p>It will be more effective to start her day with the beautiful flowers. There are many options available in Dubai from where you can get fresh flowers for her. Make sure you have selected the right option for this purpose, and the flower delivery should be quick in your living place. A special Valentine’s bouquet will add happiness to her day and be a wonderful start. The bouquet should have some gift that will enhance the real-time beauty factor of it. Moreover, you can better check the ideas available on the internet that you can use for the loved one to make her happy.</p>\n\n\n\n<h3 class="wp-block-heading">2.&nbsp;&nbsp;&nbsp;&nbsp; Plan for a Lunch or Dinner</h3>\n\n\n\n<p>It would be a good option to plan lunch or dinner with your wife so that we can have a beautiful time together. Multiple options are available, and you can choose the right option. If your wife is a working lady, pick her up from her workplace and take her for lunch; this is one of the best feelings she will feel for you. If you are happy with the dinner plan, book a table with balloons and a bottle of champagne.</p>\n\n\n\n<h3 class="wp-block-heading">3.&nbsp;&nbsp;&nbsp;&nbsp; Take Her for the Shopping</h3>\n\n\n\n<p>Take her for the shopping because it is one of the most favorite activities of women. Buy her the most beautiful dress to wear today, and you better know how you can complete her perfect beauty. It would be a good option to take her to the preferred shopping mall where she would find herself more comfortable buying anything. You have to spend the whole day with her to make her feel good and loving.</p>\n\n\n\n<h3 class="wp-block-heading">4.&nbsp;&nbsp;&nbsp;&nbsp; A Photobooth is Compulsory for the Day</h3>\n\n\n\n<p>You must choose the <strong><a href="https://partybox.ae/">AI photo booth rental Dubai</a></strong> option at your private party. Book the best place in the restaurant or at your place to set this Photobooth with the best backdrop. It will help you to click amazing photos to remind you of the day forever. A photo booth is a good solution for creating such memories. It would be good to have a <strong><a href="https://partybox.ae/">360-photo booth</a></strong> option to click your best photos with your beloved wife and keep them all in your private album. Find the best option around you in Dubai to get these amazing options for the day to make it more special.</p>\n\n\n\n<h3 class="wp-block-heading">5.&nbsp;&nbsp;&nbsp;&nbsp; Enjoy Her Favorite Food</h3>\n\n\n\n<p>This Valentine’s Day, you need to pick up your wife at her favorite restaurant and order her favorite food to enjoy. Make sure to avail herself of the online flower delivery Dubai option at the restaurant, which impressively makes her feel good. Usually, couples prefer to present beautiful flowers to their loved ones on this occasion. You must go for this option and see her happy face glow impressively. You must know about her favorite flowers and add the combination when ordering the bouquet from anywhere.</p>\n\n\n\n<h3 class="wp-block-heading">6.&nbsp;&nbsp;&nbsp;&nbsp; A Beach Walk is Compulsory</h3>\n\n\n\n<p>It is time to feel relaxed and calm and choose the best spot where you both can walk by. It reminds you of those days when you met for the first time. Recall your memories with your loving partner; it will refresh your mood and be a good decision. You must find the best place to spend quality time with your loved one. All things will get set better, and you might find this option useful and effective.</p>\n\n\n\n<h2 class="wp-block-heading">Final Wordings</h2>\n\n\n\n<p>All these points we have shared with you are most important. You must consider these points compulsory to spend quality time with your loved one. This Valentine’s, you should plan something special that may share your feelings, love, and care with your wife. You have to order special flowers for a loved one and choose the best gift option that may provide you with the ultimate solution to make your day more impressive and luxurious. Ensure that you are ready to be with her for the whole day.</p>\n	33	2025-01-13 07:26:05+00	How Effectively Can You Plan Valentine’s Day for Your Beloved Wife in 2025?	How Effectively Can You Plan Valentine’s Day for Your Beloved Wife in 2025? A Photobooth is Compulsory for the Day.	\N	\N	2025-12-19 07:19:22.515+00	2025-12-19 07:19:22.515+00	draft	2025-12-19 07:19:22.621+00	2025-12-19 07:19:22.621+00	t
10	10	Modern technology in vintage photo booths	modern-technology-in-vintage-photo-booths	Modern technology in vintage photo booths - Partybox Photobooth Blog	\n<p>Unveiling the Charm of the PartyBox Vintage Booth: A Timeless Experience</p>\n\n\n\n<p>In a world dominated by technology, the PartyBox Vintage Booth offers a delightful blend of nostalgia and innovation, creating an unforgettable photo experience for your guests. With its elegant wooden finish, brass accents, and retro design, it adds timeless charm to any event. Inside, modern features like high-resolution photography, customizable lighting, and seamless social media sharing bring the vintage look to life.</p>\n\n\n\n<p>Perfect for Every Occasion</p>\n\n\n\n<p>Whether it&#8217;s a wedding, birthday, or corporate gathering, the PartyBox Vintage Booth brings fun and sophistication to any celebration. Guests can enjoy taking photos, GIFs, and boomerangs, all while embracing a nostalgic atmosphere.</p>\n\n\n\n<p>Fully Customizable Experience</p>\n\n\n\n<p>The booth offers endless customization options, including props, backdrops, and templates that can be tailored to fit your event’s theme, making each experience unique.</p>\n\n\n\n<p>Easy to Use and Hassle-Free</p>\n\n\n\n<p>Setting up the PartyBox Vintage Booth is simple. PartyBox handles the delivery, installation, and operation, ensuring a seamless experience for you and your guests.</p>\n\n\n\n<p>Instantly Share Memories</p>\n\n\n\n<p>Guests can instantly share their photos via email or social media, plus receive physical prints as a keepsake.</p>\n\n\n\n<p>Why Choose the PartyBox Vintage Booth?</p>\n\n\n\n<ul class="wp-block-list">\n<li>Timeless Appeal: Classic design with modern features.</li>\n\n\n\n<li>Customizable Options: Personalize with props and templates.</li>\n\n\n\n<li>Instant Sharing: Share memories instantly.</li>\n\n\n\n<li>High-Quality Photos: Stunning clarity in every shot.</li>\n\n\n\n<li>Make Your Event Unforgettable</li>\n</ul>\n\n\n\n<p>The PartyBox Vintage Booth is more than just a photo booth; it’s an experience that adds fun and elegance to your event. Create lasting memories with this perfect blend of past and present.</p>\n\n\n\n<p>Book the PartyBox Vintage Booth Today</p>\n\n\n\n<p>Ready to elevate your event? Contact PartyBox to book the Vintage Booth and give your guests a unique, nostalgic experience they won’t forget.</p>\n	34	2025-01-10 08:38:58+00	Modern technology in vintage photo booths - Partybox Photobooth Blog	Modern technology in vintage photo booths - Partybox Photobooth Blog	\N	\N	2025-12-19 07:19:23.873+00	2025-12-19 07:19:23.873+00	draft	2025-12-19 07:19:23.975+00	2025-12-19 07:19:23.975+00	t
11	11	Steps to Organize a Family Reunion Party on This New Year&#8217;s Eve in Dubai	steps-to-organize-a-family-reunion-party-on-this-new-years-eve-in-dubai	New Year Party Photo Booth rental in Dubia, UAE. Steps to Organize a Family Reunion Party on This New Year's Eve in Dubai.	\n<p>Are you planning to organize a family New Year party at your home? Do you want to make your New Year party memorable? A celebration with your family members and loved ones will definitely share laughter, magical moments, and a unique festive atmosphere. If you are not an expert in organizing such parties, this discussion will help you create magical moments for everyone by following these tips. This festive event is more than a party; it is all about closing old chapters and opening the door to a new project. Start your new year with happiness and love with each other to make your moments unforgettable.</p>\n\n\n\n<h2 class="wp-block-heading">How to Create a Wow Factor in Your New Year&#8217;s Eve Family Reunion Party?</h2>\n\n\n\n<p>If you are investing your time and effort in organizing the family reunion New Year&#8217;s party, you must prefer to make it perfect from all sides. Here are some of the best options you must consider compulsory to make your New Year&#8217;s Eve family reunion party fabulous and unforgettable.</p>\n\n\n\n<h3 class="wp-block-heading">1.&nbsp;&nbsp;&nbsp;&nbsp; Start Defining the Theme of the New Year’s Eve Party</h3>\n\n\n\n<p>Let’s start by selecting an impressive New Year&#8217;s family reunion party theme. This is a key step that will ensure a festive, memorable atmosphere. The theme selection will immediately set the tone for the event&#8217;s structure and preparation. It will include a special dress code for the guests for decoration and party invitations.</p>\n\n\n\n<p>You can check the latest ideas online and select the best option for your party. If you already have the party&#8217;s theme in your mind, start applying changes accordingly.</p>\n\n\n\n<h3 class="wp-block-heading">2.&nbsp;&nbsp;&nbsp;&nbsp; Plan a Guest List</h3>\n\n\n\n<p>Planning the guest list is a big task. You need to include all the family and friends with whom you prefer to spend quality time. Gathering the right people for the party is crucial to making it successful. You need to send invitations to all guest lists and ensure you have mentioned the right time, date, and place on the invitation. If you organize the party anywhere else, you must mention the location to avoid any inconvenience.</p>\n\n\n\n<p>Don’t forget to follow up with guests to ensure everyone is coming to your party.</p>\n\n\n\n<h3 class="wp-block-heading">3.&nbsp;&nbsp;&nbsp;&nbsp; Choose the Ideal Venue</h3>\n\n\n\n<p>If you are in Dubai, this place will never make you feel sad while choosing the perfect outdoor location for the parties. There are marvelous places to organize your New Year party with your loved ones. If you have enough space inside your home for the party, invite everyone to enjoy the golden moments. Organizing an outdoor party at your home will be a good option. You can better manage everything without hassle.</p>\n\n\n\n<h3 class="wp-block-heading">4.&nbsp;&nbsp;&nbsp;&nbsp; A Photobooth is Compulsory</h3>\n\n\n\n<p>You need to check the latest <strong>New Year event ideas Dubai</strong> to add these attractive features in your party. Including <strong>New Year Photo booth rental UAE</strong> is an important factor in allowing guests to enjoy a lot and create unforgettable memories. Get ready with props for the family reunion party and set the best backdrop for the photo booth so that they can click amazing photos with each other. These clicked photos can be shared with anyone via email; there is no need to wait long like other event photographs. A Photobooth will give you instant photos that can be shared with anyone without hassle.</p>\n\n\n\n<p>Don’t forget to contact <strong>New Year photo booth rental UAE</strong> to include this amazing option at your private party.</p>\n\n\n\n<h3 class="wp-block-heading">5.&nbsp;&nbsp;&nbsp;&nbsp; Hire a Claw Machine</h3>\n\n\n\n<p>Have you selected a claw machine for the party? To entertain everyone at your <strong>New Year events Dubai</strong>, you must include a <strong>claw machine for New Year events Dubai</strong>. Fill the machine with gifts for everyone and allow your guests to try their luck at grabbing the best gift from the machine. Contact Dubai&#8217;s photo booth rental service provider to get this amazing entertainment option, and you can better distribute gifts among your guests.</p>\n\n\n\n<p>Including the claw machine and a photo booth in private parties has become common. You should add this interesting factor to make your event unforgettable.</p>\n\n\n\n<h3 class="wp-block-heading">6.&nbsp;&nbsp;&nbsp;&nbsp; What Meal to Serve?</h3>\n\n\n\n<p>You must plan for the best meal to be served at your party. Ensure that the drink section is not empty and that a special bar section is managed so your family members can enjoy the party time. You need to arrange for the best catering service for the meal and take care of your guests so they can enjoy the best time with each other.</p>\n\n\n\n<h3 class="wp-block-heading">7.&nbsp;&nbsp;&nbsp;&nbsp; Music and Dance</h3>\n\n\n\n<p>A family reunion party without music and DJ is incomplete. Choose the best DJ for the private party and let everyone dance and rock the floor. Such excitement is for your whole life; your guests will never forget this quality time. It is the best time to close all previous chapters of life to open new chapters for the future.</p>\n\n\n\n<h3 class="wp-block-heading">8.&nbsp;&nbsp;&nbsp;&nbsp; Welcome New Year with Joy</h3>\n\n\n\n<p>Welcome the New Year with complete joy and fun. It is best to say goodbye to all of your worries and welcome the new year with positive thoughts along with your loved ones.</p>\n	35	2024-12-26 02:05:07+00	New Year Party Photo Booth, Family Reunion Party on This New Year's Eve in Dubai	New Year Party Photo Booth rental in Dubia, UAE. Steps to Organize a Family Reunion Party on This New Year's Eve in Dubai.	\N	\N	2025-12-19 07:19:25.442+00	2025-12-19 07:19:25.442+00	draft	2025-12-19 07:19:25.55+00	2025-12-19 07:19:25.55+00	t
13	12	test sj	test-sj	test sj	test sj	36	2025-12-29 20:00:00+00	test sj	test sj	test-sj	\N	2025-12-30 10:57:05.018+00	2025-12-23 05:52:05.663+00	published	2025-12-30 10:57:05.589+00	2025-12-30 10:57:05.589+00	t
12	12	test sj	test-sj	test sj	test sj	36	\N	test sj	test sj	test-sj	\N	2025-12-23 05:52:05.663+00	2025-12-23 05:52:05.663+00	published	2025-12-23 05:52:06.066+00	2025-12-23 05:52:06.066+00	f
\.


--
-- Data for Name: _posts_v_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public._posts_v_rels (id, "order", parent_id, path, categories_id, tags_id) FROM stdin;
1	1	1	version.categories	1	\N
2	1	1	version.tags	\N	1
3	1	2	version.categories	2	\N
4	1	2	version.tags	\N	2
5	2	2	version.tags	\N	3
\.


--
-- Data for Name: booths; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.booths (id, title, slug, excerpt, content, booth_type, thumbnail_image_id, starting_price, is_featured, seo_title, seo_meta_description, updated_at, created_at, sort_order) FROM stdin;
6	Scribble Booth	scribble-booth	Draw on screen. Share instantly.	<p>The Scribble Booth transforms creativity into branded engagement. Guests draw, write, or leave messages directly on a glass screen while a hidden camera captures every stroke live. The result: personalized videos that merge creativity, interaction, and your brand story.</p>\n<h3>Key Features</h3>\n<ul>\n<li>Creative drawing interface with stylus or touch</li>\n<li>Live capture through concealed camera</li>\n<li>AI-supported video output</li>\n</ul>\n<h3>Technical Specifications</h3>\n<ul>\n<li>Dimensions: H200cm × W100cm × D100cm</li>\n<li>Power: 13 Amp, 220V AC</li>\n<li>Capacity: 100+ guests per hour</li>\n<li>Technology: Interactive drawing and AI-powered video processing</li>\n<li>Support: 24/7 online / On-site assistance</li>\n<li>Setup: 1–2 hours (power ready)</li>\n</ul>\n<h3>Use Cases</h3>\n<ul>\n<li>Creative brand activations</li>\n<li>Mall & retail experiences</li>\n<li>Art-inspired campaigns</li>\n<li>Experiential marketing events</li>\n</ul>\n<h3>Customization Options</h3>\n<p>Software and hardware customization available. Branding, animation flows, and integrations tailored to your event.</p>	Video Booth	6	4300	t	\N	\N	2025-12-24 13:41:20.819+00	2025-12-19 06:57:27.774+00	10
4	Partybox Mirror Photo Booth	partybox-mirror-photo-booth	Full mirror. Premium feel.	<p>Partybox Mirror combines sleek design with interactive technology to deliver a glamorous, high-engagement photo experience. With AI integration, touch-interactive animations, and full branding options, it’s built to impress and designed to perform.</p>\n<h3>Key Features</h3>\n<ul>\n<li>Full-length interactive mirror display</li>\n<li>AI-supported beauty enhancement & lighting</li>\n<li>Touch-screen animations and prompts</li>\n<li>Customizable frames, overlays, and branding</li>\n</ul>\n<h3>Technical Specifications</h3>\n<ul>\n<li>Dimensions: H165cm × W80cm × D60cm</li>\n<li>Power: 13 Amp, 220V AC</li>\n<li>Capacity: Up to 100 guests per hour</li>\n<li>Technology: AI photo enhancement with interactive mirror interface</li>\n<li>Support: 24/7 online / On-site assistance</li>\n<li>Setup: 1–2 hours (power ready)</li>\n</ul>\n<h3>Use Cases</h3>\n<ul>\n<li>Fashion & beauty events</li>\n<li>Product launches</li>\n<li>Corporate brand activations</li>\n<li>Weddings & luxury gatherings</li>\n</ul>\n<h3>Customization Options</h3>\n<p>Interactive animations and photo flows fully customizable to match your event theme and brand identity.</p>	Photo Booth	37	2800	t	\N	\N	2025-12-24 13:41:22.829+00	2025-12-19 06:57:26.541+00	40
2	Partybox Classic Photo Booth	partybox-classic-photo-booth	Clean setup. Branded output.	<p>Partybox Classic is our signature photo booth — sleek, versatile, and built for brand impact. Designed for high-traffic events, it delivers professional-quality photos with clean aesthetics and full branding flexibility.</p>\n<h3>Key Features</h3>\n<ul>\n<li>Modern minimalist design with AI integration</li>\n<li>Professional lighting and camera system</li>\n<li>Large, intuitive touchscreen interface</li>\n<li>Fully brandable exterior panels</li>\n<li>Fast, share-ready digital or printed results</li>\n</ul>\n<h3>Technical Specifications</h3>\n<ul>\n<li>Dimensions: H180cm × W75cm × D70cm</li>\n<li>Power Requirements: 13 Amp, 220V AC</li>\n<li>Capacity: Up to 120 guests per hour</li>\n<li>Technology: AI photo enhancement and automatic background optimization</li>\n<li>Support: 24/7 online support / On-site setup available</li>\n<li>Setup Time: 1–2 hours with power ready on site</li>\n</ul>\n<h3>Use Cases</h3>\n<ul>\n<li>Corporate events & conferences</li>\n<li>Product launches & marketing activations</li>\n<li>Weddings & private celebrations</li>\n<li>Retail & mall campaigns</li>\n</ul>\n<h3>Key Technology</h3>\n<p>AI-supported features and lighting adjustments ensure consistent, studio-grade results.</p>\n<p>Built for strong brand engagement within a practical budget.</p>	Photo Booth	2	2800	t	\N	\N	2025-12-24 13:41:23.461+00	2025-12-19 06:57:25.28+00	50
3	Partybox 360 Video Booth	partybox-360-video-booth	360 spins. Viral content.	<p>Partybox 360 captures cinematic spins that put your brand in motion. With AI-powered effects, smooth rotation, and fully customizable branding, it transforms every moment into dynamic, share-ready content.</p>\n<h3>Key Features</h3>\n<ul>\n<li>Automated 360° rotating arm</li>\n<li>AI-powered effects included</li>\n<li>Cinematic slow-motion effects</li>\n<li>Customizable overlays and branding</li>\n</ul>\n<h3>Technical Specifications</h3>\n<ul>\n<li>Dimensions: H33cm × ⌀80cm</li>\n<li>Power: 13 Amp, 220V AC</li>\n<li>Capacity: 100+ guests per hour</li>\n<li>Technology: 360° rotation platform with HD video capture and AI motion effects</li>\n<li>Support: 24/7 online / On-site assistance</li>\n<li>Setup: 1 hour (power ready)</li>\n</ul>\n<h3>Use Cases</h3>\n<ul>\n<li>Social media campaigns</li>\n<li>Influencer & lifestyle events</li>\n<li>Product showcases</li>\n<li>Entertainment & nightlife venues</li>\n</ul>\n<h3>Customization Options</h3>\n<p>Full software and hardware customization available — from branded overlays to event-specific effects and interactive workflows.</p>	Video Booth	3	1800	t	\N	\N	2025-12-24 13:41:24.726+00	2025-12-19 06:57:25.911+00	70
1	Partybox Retro Photo Booth	partybox-retro-photo-booth	Retro strips. Advanced tech.	<p>Partybox Retro brings timeless photo strips into the modern era. With integrated AI, professional lighting, and sleek branding options, it captures nostalgia while delivering studio-quality engagement at every event.</p>\n<h3>Key Features</h3>\n<ul>\n<li>Timeless retro design with modern AI integration</li>\n<li>Compact, event-ready build</li>\n<li>Large touchscreen interface for smooth interaction</li>\n<li>Customizable branding panels</li>\n<li>Fast, share-ready photo output</li>\n</ul>\n<h3>Technical Specifications</h3>\n<ul>\n<li>Dimensions: H175cm × W70cm × D70cm</li>\n<li>Power Requirements: 13 Amp, 220V AC</li>\n<li>Capacity: Up to 100 guests per hour</li>\n<li>Technology: AI photo enhancement with vintage-style filters</li>\n<li>Support: 24/7 online support / On-site setup available</li>\n<li>Setup Time: 1–2 hours with power ready on site</li>\n</ul>\n<h3>Use Cases</h3>\n<ul>\n<li>Retro-themed activations</li>\n<li>Lifestyle & fashion campaigns</li>\n<li>Mall & retail engagements</li>\n<li>Heritage or nostalgia-driven brand events</li>\n</ul>\n<h3>Key Technology</h3>\n<p>Built-in AI enhancement that blends retro style with modern precision.</p>\n<p>Built for strong brand engagement within a practical budget.</p>	Photo Booth	1	5800	t	\N	\N	2025-12-24 13:41:22.111+00	2025-12-19 06:57:24.566+00	30
7	Catch The Baton	catch-the-baton	Quick game. Crowd magnet.	<p>Catch The Baton combines gaming and engagement in one powerful unit. With an interactive touchscreen and a reflex-testing challenge, guests compete, connect, and generate valuable data — making every interaction both fun and measurable.</p>\n<h3>Key Features</h3>\n<ul>\n<li>Interactive touchscreen with real-time gameplay</li>\n<li>Reflex-based challenge for audience engagement</li>\n<li>Integrated data capture and leaderboard system</li>\n</ul>\n<h3>Technical Specifications</h3>\n<ul>\n<li>Dimensions: Top ⌀72.5cm × Body H192cm × W10cm</li>\n<li>Power: 13 Amp, 220V AC</li>\n<li>Capacity: 100+ interactions per hour</li>\n<li>Technology: Interactive gaming with AI-supported scoring</li>\n<li>Support: 24/7 online / On-site assistance</li>\n<li>Setup: 1–2 hours (power ready)</li>\n</ul>\n<h3>Use Cases</h3>\n<ul>\n<li>Gaming events & tournaments</li>\n<li>Youth activations</li>\n<li>Interactive marketing campaigns</li>\n<li>Entertainment & brand venues</li>\n</ul>\n<h3>Customization Options</h3>\n<p>Software and hardware customization available. Branding, game logic, data flows, and integrations tailored to your event.</p>	Engagement Tech	7	1700	t	\N	\N	2025-12-24 13:41:25.445+00	2025-12-19 06:57:28.496+00	80
5	Partybox Mini Photo Booth	partybox-mini-photo-booth	Compact booth. AI powered.	<p>Partybox Mini combines simplicity and performance in one reliable setup. Compact yet powerful, it’s designed for events that demand efficiency, quality, and effortless engagement — without the premium price tag.</p>\n<h3>Key Features</h3>\n<ul>\n<li>Clean, all-in-one booth design</li>\n<li>Bright LED lighting for perfect portraits</li>\n<li>Fast setup and easy operation</li>\n<li>Seamless AI photo processing</li>\n<li>Compact footprint ideal for indoor venues</li>\n</ul>\n<h3>Technical Specifications</h3>\n<ul>\n<li>Dimensions: H170cm × W65cm × D60cm</li>\n<li>Power Requirements: 13 Amp, 220V AC</li>\n<li>Capacity: Up to 90 guests per hour</li>\n<li>Technology: AI-powered image enhancement with instant sharing options</li>\n<li>Support: 24/7 online support / On-site setup available</li>\n<li>Setup Time: 45–60 minutes with power ready on site</li>\n</ul>\n<h3>Use Cases</h3>\n<ul>\n<li>Corporate gatherings</li>\n<li>Retail activations</li>\n<li>Weddings & social events</li>\n<li>Small-scale promotional campaigns</li>\n</ul>\n<h3>Key Technology</h3>\n<p>AI-supported features for crisp, share-ready photos that elevate every moment.</p>\n<p>Partybox Mini proves that high-quality engagement doesn’t have to come at a high cost.</p>	Photo Booth	5	1600	t	\N	\N	2025-12-24 13:41:21.473+00	2025-12-19 06:57:27.176+00	20
9	PartyBox Claw Machine	partybox-claw-machine	Classic arcade. High Engagement	\n<h3>Key Features</h3>\n<ul>\n    <li>Classic arcade claw experience</li>\n    <li>Coin-operated mechanism</li>\n    <li>Simple, reliable gameplay</li>\n    <li>Suitable for all ages</li>\n</ul>\n\n<h3>Technical Specifications</h3>\n<ul>\n    <li><strong>Dimensions:</strong> Compact standard claw cabinet</li>\n    <li><strong>Power:</strong> 13 Amp, 220V AC</li>\n    <li><strong>Capacity:</strong> Continuous play (coin-based)</li>\n    <li><strong>Technology:</strong> Mechanical claw system</li>\n    <li><strong>Operation:</strong> Coin mechanism</li>\n    <li><strong>Setup Time:</strong> 30–60 minutes</li>\n</ul>\n\n<h3>Use Cases</h3>\n<ul>\n    <li>Kids parties & family events</li>\n    <li>Arcades & play zones</li>\n    <li>Mall pop-ups</li>\n    <li>Casual brand activations</li>\n    <li>Entertainment corners at events</li>\n</ul>\n\n<h3>Customization Options</h3>\n<ul>\n    <li>External cabinet branding (stickers / wraps)</li>\n    <li>Prize selection customization</li>\n    <li>Coin value configuration</li>\n    <li>Optional lighting or visual decals</li>\n</ul>\n        	Engagement Tech	38	2800	t	PartyBox Claw Machine | Rent Arcade Games in Dubai	PartyBox Claw is a classic coin-operated mechanism designed for fast engagement. Perfect for events, parties, and brand activations.	2025-12-31 05:17:10.024+00	2025-12-24 10:26:09.224+00	60
\.


--
-- Data for Name: booths_faqs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.booths_faqs (_order, _parent_id, id, question, answer) FROM stdin;
\.


--
-- Data for Name: booths_features; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.booths_features (_order, _parent_id, id, icon, text) FROM stdin;
1	6	6944fa3ce327061561caa30e	PenTool	Interactive
2	6	6944fa3ce327061561caa30f	Sparkles	Artistic
3	6	6944fa3ce327061561caa310	Share2	Social-Ready
1	5	6944fa3be327061561caa30b	Sparkles	Compact
2	5	6944fa3be327061561caa30c	Star	Efficient
3	5	6944fa3be327061561caa30d	Share2	AI-Ready
1	1	6944fa36e327061561caa2ff	Sparkles	Timeless
2	1	6944fa36e327061561caa300	Share2	Shareable
3	1	6944fa36e327061561caa301	PanelsTopLeft	Brand-Ready
1	4	6944fa39e327061561caa308	Sparkles	Interactive
2	4	6944fa39e327061561caa309	Star	Glam
3	4	6944fa39e327061561caa30a	Frames	Stylish
1	2	6944fa37e327061561caa302	Sparkles	Sleek
2	2	6944fa37e327061561caa303	ShieldCheck	Reliable
3	2	6944fa37e327061561caa304	PanelsTopLeft	Versatile
1	3	6944fa38e327061561caa305	Clapperboard	Cinematic
2	3	6944fa38e327061561caa306	Sparkles	Viral-Ready
3	3	6944fa38e327061561caa307	RotateCcw	Immersive
1	7	6944fa3de327061561caa311	Zap	Fast-Paced
2	7	6944fa3de327061561caa312	Megaphone	Attention-Grabbing
3	7	6944fa3de327061561caa313	Gamepad2	Engagement-Driven
1	9	694bc09f5fbfbe326b7f8b5a	Joystick	Classic arcade
2	9	694bc09f5fbfbe326b7f8b5b	Sparkles	High engagement
\.


--
-- Data for Name: booths_gallery_images; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.booths_gallery_images (_order, _parent_id, id, image_id) FROM stdin;
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.categories (id, name, slug, updated_at, created_at) FROM stdin;
1	Weddings	weddings	2025-12-19 06:57:28.946+00	2025-12-19 06:57:28.946+00
2	Corporate Events	corporate-events	2025-12-19 06:57:30.14+00	2025-12-19 06:57:30.14+00
\.


--
-- Data for Name: concepts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.concepts (id, title, slug, content, seo_title, seo_description, seo_image_id, updated_at, created_at) FROM stdin;
1	Summer Activations	summer-activations	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "this is a test ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h1", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "this is testing", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "list", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "list", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "bullet", "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "quote", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "this is a test", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	test	testtttt	\N	2025-12-29 12:30:55.468+00	2025-12-29 12:30:55.467+00
5	basic text - sj test	test-sj	<div class="space-y-8">\n  <!-- Hero Section -->\n  <div class="rounded-3xl bg-slate-50 p-8 md:p-12 border border-slate-200 text-center">\n    <span class="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-4">\n      New Feature\n    </span>\n    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">\n      Raw HTML Rendering\n    </h2>\n    <p class="text-lg text-slate-600 max-w-2xl mx-auto mb-8">\n      This entire section is rendered from the <strong>Concepts</strong> CMS collection using raw HTML code. \n      You have full control over the layout.\n    </p>\n    <a href="/contact" class="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-slate-800 transition-colors">\n      Test Button\n    </a>\n  </div>\n\n  <!-- Two Column Grid -->\n  <div class="grid md:grid-cols-2 gap-6">\n    <div class="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">\n      <h3 class="text-xl font-semibold text-slate-900 mb-2">Column One</h3>\n      <p class="text-slate-500">\n        You can easily create multi-column layouts using standard Tailwind grid classes like <code>grid-cols-2</code>.\n      </p>\n    </div>\n    <div class="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">\n      <h3 class="text-xl font-semibold text-slate-900 mb-2">Column Two</h3>\n      <p class="text-slate-500">\n        Since this is raw HTML, you can embed anything: iframe maps, custom scripts, or complex design elements.\n      </p>\n    </div>\n  </div>\n</div>	Test	test	\N	2025-12-30 06:18:47.633+00	2025-12-30 05:23:35.532+00
2	sj test	baselyoussef	<div class="py-10 md:py-20">\n  <div class="flex flex-col md:flex-row items-center gap-12">\n    <!-- Left Content -->\n    <div class="flex-1 space-y-6">\n      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">\n        Design without <br/>\n        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Limits.</span>\n      </h1>\n      <p class="text-lg text-slate-600 leading-relaxed">\n        This page demonstrates a <strong>split-screen layout</strong>. Because the CMS accepts raw HTML, you can drop in complex marketing sections like this one without touching the codebase.\n      </p>\n      \n      <ul class="space-y-4 pt-2">\n        <li class="flex items-center gap-3 text-slate-700 font-medium">\n          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-600">✓</span>\n          <span>Full HTML & CSS Control</span>\n        </li>\n        <li class="flex items-center gap-3 text-slate-700 font-medium">\n          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-600">✓</span>\n          <span>Instant Updates via CMS</span>\n        </li>\n        <li class="flex items-center gap-3 text-slate-700 font-medium">\n          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-600">✓</span>\n          <span>Responsive & Mobile Ready</span>\n        </li>\n      </ul>\n\n      <div class="pt-6">\n        <a href="/contact" class="inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-base font-bold text-white transition-transform hover:scale-105 hover:shadow-xl">\n            Start Your Project\n        </a>\n        <span class="ml-4 text-sm text-slate-500">No credit card required</span>\n      </div>\n    </div>\n\n    <!-- Right Visual -->\n    <div class="flex-1 w-full">\n      <div class="relative overflow-hidden rounded-3xl bg-slate-50 shadow-2xl aspect-square md:aspect-[4/3] border border-slate-100">\n        <!-- Abstract Decoration -->\n        <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-200 blur-3xl opacity-50"></div>\n        <div class="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-pink-200 blur-3xl opacity-50"></div>\n        \n        <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-8">\n            <div class="h-16 w-16 mb-4 rounded-2xl bg-white shadow-lg flex items-center justify-center text-3xl">\n                🎨\n            </div>\n            <h3 class="text-xl font-bold text-slate-900">Custom Visuals</h3>\n            <p class="text-slate-500 mt-2 max-w-xs">You can use &lt;img&gt; tags here or embed videos.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>	basel youssef	ben saqib	\N	2025-12-30 06:23:46.648+00	2025-12-30 05:14:27.503+00
6	This is a test for concepts	this-is-a-test-for-concepts	<div class="py-10 md:py-20">\n  <div class="flex flex-col md:flex-row items-center gap-12">\n    <!-- Left Content -->\n    <div class="flex-1 space-y-6">\n      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">\n        Design without <br/>\n        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Limits.</span>\n      </h1>\n      <p class="text-lg text-slate-600 leading-relaxed">\n        This page demonstrates a <strong>split-screen layout</strong>. Because the CMS accepts raw HTML, you can drop in complex marketing sections like this one without touching the codebase.\n      </p>\n      \n      <ul class="space-y-4 pt-2">\n        <li class="flex items-center gap-3 text-slate-700 font-medium">\n          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-600">✓</span>\n          <span>Full HTML & CSS Control</span>\n        </li>\n        <li class="flex items-center gap-3 text-slate-700 font-medium">\n          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-600">✓</span>\n          <span>Instant Updates via CMS</span>\n        </li>\n        <li class="flex items-center gap-3 text-slate-700 font-medium">\n          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-600">✓</span>\n          <span>Responsive & Mobile Ready</span>\n        </li>\n      </ul>\n\n      <div class="pt-6">\n        <a href="/contact" class="inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-base font-bold text-white transition-transform hover:scale-105 hover:shadow-xl">\n            Start Your Project\n        </a>\n        <span class="ml-4 text-sm text-slate-500">No credit card required</span>\n      </div>\n    </div>\n\n    <!-- Right Visual -->\n    <div class="flex-1 w-full">\n      <div class="relative overflow-hidden rounded-3xl bg-slate-50 shadow-2xl aspect-square md:aspect-[4/3] border border-slate-100">\n        <!-- Abstract Decoration -->\n        <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-200 blur-3xl opacity-50"></div>\n        <div class="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-pink-200 blur-3xl opacity-50"></div>\n        \n        <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-8">\n            <div class="h-16 w-16 mb-4 rounded-2xl bg-white shadow-lg flex items-center justify-center text-3xl">\n                🎨\n            </div>\n            <h3 class="text-xl font-bold text-slate-900">Custom Visuals</h3>\n            <p class="text-slate-500 mt-2 max-w-xs">You can use &lt;img&gt; tags here or embed videos.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>	This is the SEO Test	I'm testing the description here	\N	2025-12-30 06:31:54.973+00	2025-12-30 06:31:54.972+00
7	SJ TEST HTML	sj-test-html	<!-- HERO -->\r\n<section class="text-center mb-10">\r\n  <h1 class="text-3xl md:text-4xl font-bold tracking-tight mb-3">360 Photo Booth Rental for Events</h1>\r\n  <h2 class="text-base md:text-lg font-medium text-white/80 mb-5">\r\n    Immersive 360° videos • Instant sharing • High-impact guest experience\r\n  </h2>\r\n\r\n  <p class="max-w-3xl mx-auto text-white/85 mb-4">\r\n    Welcome! You’ve likely arrived here searching for a unique and engaging way to elevate your next event.\r\n    A 360 photo booth delivers an immersive, interactive experience that captures your guests from every angle.\r\n  </p>\r\n  <p class="max-w-3xl mx-auto text-white/85">\r\n    Whether you’re planning a wedding, corporate event, or marketing activation, a 360-degree photo booth brings\r\n    innovation and engagement to your event like no other.\r\n  </p>\r\n\r\n  <!-- VIDEO GRID -->\r\n  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">\r\n    <div class="w-full aspect-video rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">\r\n      <iframe\r\n        class="w-full h-full"\r\n        src="https://www.youtube.com/embed/6oxSbO1-N1g"\r\n        title="360 Photo Booth Video 1"\r\n        allowfullscreen\r\n      ></iframe>\r\n    </div>\r\n    <div class="w-full aspect-video rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">\r\n      <iframe\r\n        class="w-full h-full"\r\n        src="https://www.youtube.com/embed/XWgWes7QCIM"\r\n        title="360 Photo Booth Video 2"\r\n        allowfullscreen\r\n      ></iframe>\r\n    </div>\r\n    <div class="w-full aspect-video rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">\r\n      <iframe\r\n        class="w-full h-full"\r\n        src="https://www.youtube.com/embed/6za16CSSn8E"\r\n        title="360 Photo Booth Video 3"\r\n        allowfullscreen\r\n      ></iframe>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- WHAT IS 360 PHOTO BOOTH -->\r\n<section class="mt-12">\r\n  <h3 class="text-xl md:text-2xl font-semibold mb-3">What Is a 360 Photo Booth?</h3>\r\n  <p class="text-sm md:text-base text-white/85 mb-4">\r\n    A 360 photo booth is an advanced, interactive experience that captures high-quality video content by rotating a\r\n    camera around the participants. Unlike traditional photo booths, it creates dynamic 360-degree videos that\r\n    showcase the subject from all angles.\r\n  </p>\r\n  <p class="text-sm md:text-base text-white/85">\r\n    With a 360 photo booth rental, your attendees get unique, share-ready content instantly — often enhanced with\r\n    slow-motion, overlays, and branded effects for a premium finish.\r\n  </p>\r\n</section>\r\n\r\n<!-- HOW IT WORKS -->\r\n<section class="mt-12">\r\n  <h3 class="text-xl md:text-2xl font-semibold mb-3">How Does a 360 Photo Booth Work?</h3>\r\n\r\n  <ol class="mt-4 space-y-3">\r\n    <li class="relative pl-10 text-sm md:text-base text-white/85">\r\n      <span\r\n        class="absolute left-0 top-0 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/50 text-xs text-white/90"\r\n        >1</span\r\n      >\r\n      <strong class="text-white">Setup:</strong> A high-definition camera is mounted on a rotating arm, positioned around the platform.\r\n    </li>\r\n    <li class="relative pl-10 text-sm md:text-base text-white/85">\r\n      <span\r\n        class="absolute left-0 top-0 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/50 text-xs text-white/90"\r\n        >2</span\r\n      >\r\n      <strong class="text-white">Interaction:</strong> Guests step onto the platform (often with props or branded accessories) and the camera revolves around them, capturing smooth slow-motion footage.\r\n    </li>\r\n    <li class="relative pl-10 text-sm md:text-base text-white/85">\r\n      <span\r\n        class="absolute left-0 top-0 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/50 text-xs text-white/90"\r\n        >3</span\r\n      >\r\n      <strong class="text-white">Instant Sharing:</strong> The video is processed with effects (slow-motion, overlays, branding) and shared immediately via social media, email, or text.\r\n    </li>\r\n  </ol>\r\n\r\n  <p class="mt-4 text-sm md:text-base text-white/85">\r\n    The full experience takes only a few minutes per guest — ideal for high-traffic events where you want premium\r\n    output without slowing down the flow.\r\n  </p>\r\n</section>\r\n\r\n<!-- WHERE IT CAN BE USED -->\r\n<section class="mt-12">\r\n  <h3 class="text-xl md:text-2xl font-semibold mb-3">Where Can a 360 Photo Booth Be Used?</h3>\r\n\r\n  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">\r\n    <div class="rounded-2xl p-5 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10">\r\n      <h4 class="text-base font-semibold mb-2">Weddings</h4>\r\n      <p class="text-sm text-white/85">Add a cinematic touch and let guests capture special moments in high-quality 360° video.</p>\r\n    </div>\r\n\r\n    <div class="rounded-2xl p-5 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10">\r\n      <h4 class="text-base font-semibold mb-2">Corporate Events</h4>\r\n      <p class="text-sm text-white/85">Perfect for launches, trade shows, and activations — guests leave with branded content that keeps circulating.</p>\r\n    </div>\r\n\r\n    <div class="rounded-2xl p-5 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10">\r\n      <h4 class="text-base font-semibold mb-2">Marketing Campaigns &amp; Activations</h4>\r\n      <p class="text-sm text-white/85">Create buzz with an interactive experience designed for experiential marketing and social sharing.</p>\r\n    </div>\r\n\r\n    <div class="rounded-2xl p-5 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10">\r\n      <h4 class="text-base font-semibold mb-2">Social Events &amp; Parties</h4>\r\n      <p class="text-sm text-white/85">From birthdays to anniversaries, guests love the dynamic content and instant share factor.</p>\r\n    </div>\r\n\r\n    <div class="rounded-2xl p-5 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10">\r\n      <h4 class="text-base font-semibold mb-2">Festivals &amp; Public Events</h4>\r\n      <p class="text-sm text-white/85">High-attendance friendly — fast experience, big visual impact, and content guests actually post.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <p class="mt-4 text-sm md:text-base text-white/85">\r\n    No matter the occasion, a 360 video booth is a powerful way to engage your audience and create high-quality,\r\n    interactive content at scale.\r\n  </p>\r\n</section>\r\n\r\n<!-- BENEFITS -->\r\n<section class="mt-12">\r\n  <h3 class="text-xl md:text-2xl font-semibold mb-3">Benefits of Renting a 360 Photo Booth</h3>\r\n\r\n  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">\r\n    <div class="rounded-2xl p-5 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10">\r\n      <h4 class="text-base font-semibold mb-2">Innovative Content</h4>\r\n      <p class="text-sm text-white/85">Go beyond standard photos — guests take home visually striking slow-motion 360° videos.</p>\r\n    </div>\r\n\r\n    <div class="rounded-2xl p-5 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10">\r\n      <h4 class="text-base font-semibold mb-2">Social Media Engagement</h4>\r\n      <p class="text-sm text-white/85">Share-ready content for Instagram, TikTok, and more — perfect for boosting event reach organically.</p>\r\n    </div>\r\n\r\n    <div class="rounded-2xl p-5 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10">\r\n      <h4 class="text-base font-semibold mb-2">Branding Opportunities</h4>\r\n      <p class="text-sm text-white/85">Customize with your logo, colors, overlays, and messaging for maximum brand exposure.</p>\r\n    </div>\r\n\r\n    <div class="rounded-2xl p-5 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10">\r\n      <h4 class="text-base font-semibold mb-2">Interactive Experience</h4>\r\n      <p class="text-sm text-white/85">Guests become part of the content creation — it’s engaging, dynamic, and highly repeatable.</p>\r\n    </div>\r\n\r\n    <div class="rounded-2xl p-5 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10">\r\n      <h4 class="text-base font-semibold mb-2">High-Quality Production</h4>\r\n      <p class="text-sm text-white/85">Professional, HD output with smooth motion and premium finishing effects.</p>\r\n    </div>\r\n\r\n    <div class="rounded-2xl p-5 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10">\r\n      <h4 class="text-base font-semibold mb-2">Versatile for Any Event</h4>\r\n      <p class="text-sm text-white/85">Works beautifully for weddings, corporates, public events, festivals, and private parties.</p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- WHY CHOOSE US -->\r\n<section class="mt-12">\r\n  <h3 class="text-xl md:text-2xl font-semibold mb-3">Why Choose Our 360 Photo Booth Rental Services?</h3>\r\n  <p class="text-sm md:text-base text-white/85 mb-4">\r\n    We specialize in high-quality, customizable 360 photo booth rentals for all event types. Our expert team ensures\r\n    the booth is delivered, set up, and operated smoothly — with professional support throughout.\r\n  </p>\r\n  <p class="text-sm md:text-base text-white/85">\r\n    We offer flexible packages and can tailor the experience to your needs — from branded overlays and effects for\r\n    corporate activations to themed styling for weddings and celebrations.\r\n  </p>\r\n</section>\r\n\r\n<!-- FAQ -->\r\n<section class="mt-12">\r\n  <h3 class="text-xl md:text-2xl font-semibold mb-4">Frequently Asked Questions</h3>\r\n\r\n  <div class="mt-3 divide-y divide-white/10">\r\n    <details class="py-3">\r\n      <summary class="cursor-pointer select-none flex items-center justify-between gap-3 text-base">\r\n        <span>1. How much does it cost to rent a 360 photo booth?</span>\r\n        <span class="text-white/80 text-xl leading-none">+</span>\r\n      </summary>\r\n      <p class="mt-2 text-sm md:text-base text-white/85">\r\n        Pricing depends on event duration, customization, and location. Contact us for a personalized quote that fits\r\n        your requirements.\r\n      </p>\r\n    </details>\r\n\r\n    <details class="py-3">\r\n      <summary class="cursor-pointer select-none flex items-center justify-between gap-3 text-base">\r\n        <span>2. Can I customize the 360 photo booth?</span>\r\n        <span class="text-white/80 text-xl leading-none">+</span>\r\n      </summary>\r\n      <p class="mt-2 text-sm md:text-base text-white/85">\r\n        Yes. We offer full customization including branding, themes, overlays, and selectable effects.\r\n      </p>\r\n    </details>\r\n\r\n    <details class="py-3">\r\n      <summary class="cursor-pointer select-none flex items-center justify-between gap-3 text-base">\r\n        <span>3. How long does it take to set up a 360 photo booth?</span>\r\n        <span class="text-white/80 text-xl leading-none">+</span>\r\n      </summary>\r\n      <p class="mt-2 text-sm md:text-base text-white/85">\r\n        Setup typically takes 45 minutes to 1 hour, depending on your event space and the customization requirements.\r\n      </p>\r\n    </details>\r\n\r\n    <details class="py-3">\r\n      <summary class="cursor-pointer select-none flex items-center justify-between gap-3 text-base">\r\n        <span>4. Can guests share their videos instantly?</span>\r\n        <span class="text-white/80 text-xl leading-none">+</span>\r\n      </summary>\r\n      <p class="mt-2 text-sm md:text-base text-white/85">\r\n        Yes. Guests can share instantly via social media, email, or text — perfect for real-time engagement.\r\n      </p>\r\n    </details>\r\n\r\n    <details class="py-3">\r\n      <summary class="cursor-pointer select-none flex items-center justify-between gap-3 text-base">\r\n        <span>5. What events are suitable for a 360 photo booth?</span>\r\n        <span class="text-white/80 text-xl leading-none">+</span>\r\n      </summary>\r\n      <p class="mt-2 text-sm md:text-base text-white/85">\r\n        360 booths work for weddings, corporate events, festivals, brand activations, and private parties — any event\r\n        that wants high-impact, interactive content.\r\n      </p>\r\n    </details>\r\n\r\n    <details class="py-3">\r\n      <summary class="cursor-pointer select-none flex items-center justify-between gap-3 text-base">\r\n        <span>6. Do you offer 360 photo booths in my area?</span>\r\n        <span class="text-white/80 text-xl leading-none">+</span>\r\n      </summary>\r\n      <p class="mt-2 text-sm md:text-base text-white/85">\r\n        Yes. We deliver and set up at your event location. Reach out and we’ll confirm availability in your region.\r\n      </p>\r\n    </details>\r\n  </div>\r\n</section>\r\n\r\n<!-- CTA -->\r\n<section class="text-center mt-12">\r\n  <p class="max-w-2xl mx-auto text-sm md:text-base text-white/85 mb-6">\r\n    Enhance your next event with a 360 photo booth rental and create shareable moments from every angle.\r\n    Get in touch to explore packages and book your booth.\r\n  </p>\r\n\r\n  <a\r\n    href="https://ae.iboothme.com/contact-us?product=360-photobooth"\r\n    class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#7042D2] text-white font-semibold tracking-wide uppercase text-sm hover:opacity-90 transition"\r\n  >\r\n    Book Now\r\n  </a>\r\n</section>\r\n	test sj	TEST SJ	\N	2025-12-30 11:15:20.679+00	2025-12-30 11:15:20.679+00
\.


--
-- Data for Name: gallery; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.gallery (id, title, type, image_id, alt, category, featured, updated_at, created_at) FROM stdin;
12	Partybox moment 12	image	19	Partybox moment 12	Social	t	2025-12-19 06:57:36.285+00	2025-12-19 06:57:36.285+00
19	Partybox Gallery 1	image	8	Partybox Gallery 1	Social	t	2025-12-19 07:21:28.127+00	2025-12-19 07:21:28.127+00
20	Partybox Gallery 10	image	17	Partybox Gallery 10	Social	t	2025-12-19 07:21:29.537+00	2025-12-19 07:21:29.537+00
21	Partybox Gallery 11	image	18	Partybox Gallery 11	Social	t	2025-12-19 07:21:30.957+00	2025-12-19 07:21:30.956+00
22	Partybox Gallery 12	image	20	Partybox Gallery 12	Social	t	2025-12-19 07:21:35.24+00	2025-12-19 07:21:32.548+00
23	Partybox Gallery 13	image	21	Partybox Gallery 13	Social	t	2025-12-19 07:21:37.138+00	2025-12-19 07:21:37.138+00
24	Partybox Gallery 14	image	22	Partybox Gallery 14	Social	t	2025-12-19 07:21:38.839+00	2025-12-19 07:21:38.839+00
25	Partybox Gallery 15	image	23	Partybox Gallery 15	Social	t	2025-12-19 07:21:40.563+00	2025-12-19 07:21:40.563+00
26	Partybox Gallery 16	image	24	Partybox Gallery 16	Social	t	2025-12-19 07:21:42.854+00	2025-12-19 07:21:42.854+00
27	Partybox Gallery 17	image	25	Partybox Gallery 17	Social	t	2025-12-19 07:21:44.578+00	2025-12-19 07:21:44.578+00
28	Partybox Gallery 2	image	9	Partybox Gallery 2	Social	t	2025-12-19 07:21:46.625+00	2025-12-19 07:21:46.625+00
29	Partybox Gallery 3	image	10	Partybox Gallery 3	Social	t	2025-12-19 07:21:49.151+00	2025-12-19 07:21:49.151+00
30	Partybox Gallery 4	image	11	Partybox Gallery 4	Social	t	2025-12-19 07:21:51.245+00	2025-12-19 07:21:51.245+00
31	Partybox Gallery 5	image	12	Partybox Gallery 5	Social	t	2025-12-19 07:21:53.244+00	2025-12-19 07:21:53.244+00
32	Partybox Gallery 6	image	13	Partybox Gallery 6	Social	t	2025-12-19 07:21:55.342+00	2025-12-19 07:21:55.342+00
33	Partybox Gallery 7	image	14	Partybox Gallery 7	Social	t	2025-12-19 07:21:57.765+00	2025-12-19 07:21:57.765+00
34	Partybox Gallery 8	image	15	Partybox Gallery 8	Social	t	2025-12-19 07:22:00.11+00	2025-12-19 07:22:00.11+00
36	IMG-20251226-WA0001.jpg	image	39	\N	Other	t	2025-12-30 05:08:51.195+00	2025-12-30 05:08:51.195+00
37	IMG-20251226-WA0002.jpg	image	40	test	Other	t	2025-12-30 05:56:32.251+00	2025-12-30 05:10:30.647+00
\.


--
-- Data for Name: leads; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.leads (id, name, email, phone, message, booth_interest, updated_at, created_at, utm_source, utm_medium, utm_campaign, utm_term, utm_content) FROM stdin;
1	basel	basel@zcreativetech.com	+971553112659	Company: ZCT\nInterest: photo\n\nThis is a test	photo	2025-12-22 10:59:02.626+00	2025-12-22 10:59:02.625+00	\N	\N	\N	\N	\N
2	Basel Testing booking	booking@zct.com		Company: Wedding\nDate: No date yet\nEvent Type: Wedding\nMessage: This is a test\n	Partybox Retro Photo Booth	2025-12-22 11:01:58.693+00	2025-12-22 11:01:58.693+00	\N	\N	\N	\N	\N
3	Basel Alaya	basel.alaya@gmail.com	+971553112659	Company: Z CREATIVE TECH\nInterest: photo\n\nThis is a test	photo	2025-12-22 11:11:08.597+00	2025-12-22 11:11:08.596+00	\N	\N	\N	\N	\N
4	baselbasel	basel@zct.com	+971553112659	Company: zct\nInterest: photo\n\nThis is a test	photo	2025-12-22 11:18:46.302+00	2025-12-22 11:18:46.301+00	\N	\N	\N	\N	\N
5	testers	test@zct.com	+97155312312312	Company: zct\nInterest: photo\n\nthis is a test	photo	2025-12-22 11:33:44.772+00	2025-12-22 11:33:44.77+00	\N	\N	\N	\N	\N
6	dadadas	dsadasd@gmail.com	+971553123123	Company: testing zct\nInterest: photo\n\ntesting the mailer sending	photo	2025-12-22 11:35:41.622+00	2025-12-22 11:35:41.62+00	\N	\N	\N	\N	\N
7	basel alaya	bb@gmail.com	+971553112888	Company: ZCT\nInterest: photo\n\nTHISI S A TESTING PHOTO	photo	2025-12-22 11:37:01.628+00	2025-12-22 11:37:01.626+00	\N	\N	\N	\N	\N
8	testing Basel	basel@zcreativetech.com	+971553112659	Company: ZCT\nInterest: photo\n\nThis is the test	photo	2025-12-22 12:08:11.742+00	2025-12-22 12:08:11.741+00	\N	\N	\N	\N	\N
9	basel	basel@gmail.com	+971553112666	Company: ZCT\nInterest: photo\n\nTESTING TEST TEST	photo	2025-12-22 12:27:37.434+00	2025-12-22 12:27:37.433+00	\N	\N	\N	\N	\N
10	Modar Mohammed Sabouni	modarsabouni@gmail.com	+971581010383	Company: HQ\nInterest: video\n\nhii call me 	video	2025-12-24 14:05:48.453+00	2025-12-24 14:05:48.451+00	\N	\N	\N	\N	\N
11	Basel	basel@gmail.com	+971553115692	Company: ZCT\nInterest: video\n\ntHIS IS A TEST 	video	2025-12-29 11:56:20.094+00	2025-12-29 11:56:20.093+00	\N	\N	\N	\N	\N
12	test2	test@gmail.com	+9715531122222	Company: zct\nInterest: photo\n\nthis is a test	photo	2025-12-29 11:58:58.648+00	2025-12-29 11:58:58.648+00	\N	\N	\N	\N	\N
13	Basel	basel@basel.com	+971553112659	Company: ZCT\nInterest: photo\n\nTESTER	photo	2025-12-29 12:01:48.616+00	2025-12-29 12:01:48.616+00	\N	\N	\N	\N	\N
14	Basel	basel@basel.com	+971553112659	Company: ZCT\nInterest: photo\n\nTESTER	photo	2025-12-29 12:02:09.222+00	2025-12-29 12:02:09.221+00	\N	\N	\N	\N	\N
15	Basel	basel@basel.com	+971553112659	Company: ZCT\nInterest: photo\n\nTESTER	photo	2025-12-29 12:04:01.379+00	2025-12-29 12:04:01.379+00	\N	\N	\N	\N	\N
16	Basel	basel@basel.com	+971553112659	Company: ZCT\nInterest: photo\n\nTESTER	photo	2025-12-29 12:04:01.38+00	2025-12-29 12:04:01.38+00	\N	\N	\N	\N	\N
17	Tester	bae@gmail.com	+971555311258	basel test	Scribble Booth	2025-12-29 12:06:45.9+00	2025-12-29 12:06:45.9+00	\N	\N	\N	\N	\N
18	Basel	test@test.com	+971551192929	This is a test	Scribble Booth	2025-12-29 12:17:46.305+00	2025-12-29 12:17:46.304+00	\N	\N	\N	\N	\N
19	Ben Philip	ben@iboothme.app	+971563619078	test	Catch The Baton	2025-12-29 14:34:14.648+00	2025-12-29 14:34:14.647+00	\N	\N	\N	\N	\N
20	Ben Philip	ben@iboothme.app	+971563619078	Company: iboothme\nInterest: engagement\n\ntest2 and a bit more like that\n	engagement	2025-12-29 14:35:01.74+00	2025-12-29 14:35:01.74+00	\N	\N	\N	\N	\N
21	Ben Philip	ben@iboothme.app	+971563619078	Company: iboothme\nInterest: engagement\n\ntest2 and a bit more like that\n	engagement	2025-12-29 14:35:03.057+00	2025-12-29 14:35:03.056+00	\N	\N	\N	\N	\N
22	Basel al	basel@basel.com	+971553112659	Company: ZCT\nInterest: photo\n\nThis is a test	photo	2025-12-29 15:27:11.301+00	2025-12-29 15:27:11.301+00	\N	\N	\N	\N	\N
23	Basel	basel@gmail.com	+971553112651	this is a testt\n	PartyBox Claw Machine	2025-12-29 15:27:58.105+00	2025-12-29 15:27:58.105+00	\N	\N	\N	\N	\N
24	SHUBHNEET JAIN	shubhneet@iboothme.com	054 540 5088	RGRTT	PartyBox Claw Machine	2025-12-30 04:57:38.557+00	2025-12-30 04:57:38.557+00	\N	\N	\N	\N	\N
25	SJ	shubhneet@iboothme.com	0585864000	Interest: photo\n\nTEST TEST TEST	photo	2025-12-30 05:26:50.826+00	2025-12-30 05:26:50.826+00	\N	\N	\N	\N	\N
26	JSJSJSSS	test@iboothme.ae	0585864000	Company: Studio94 dmcc\nInterest: live-customization\n\nlISTEN TO ME I AM TESTING, SO THIS SHOULD REFLECT IN GOOGLE FORM.	live-customization	2025-12-30 05:27:55.339+00	2025-12-30 05:27:55.339+00	\N	\N	\N	\N	\N
27	JSJSJSSS	test@iboothme.ae	0585864000	Company: Studio94 dmcc\nInterest: live-customization\n\nlISTEN TO ME I AM TESTING, SO THIS SHOULD REFLECT IN GOOGLE FORM.	live-customization	2025-12-30 05:27:56.932+00	2025-12-30 05:27:56.932+00	\N	\N	\N	\N	\N
28	SHUBHNEET JAIN	shubhneet@iboothme.com	test test	testinggg sj	Catch The Baton	2025-12-30 05:36:37.959+00	2025-12-30 05:36:37.959+00	\N	\N	\N	\N	\N
29	Basel Alaya	basel@zcreativetech.com	+971553112659	Event Date: 2025-12-31\nInterest: photo\n\nThis is a contact form test	photo	2025-12-30 06:09:58.496+00	2025-12-30 06:09:58.496+00	\N	\N	\N	\N	\N
30	Basel Booking	zct@zcreativetech.com	+971541231312	Event Date: 2026-01-18\nThis is a booking form test	PartyBox Claw Machine	2025-12-30 06:10:59.464+00	2025-12-30 06:10:59.464+00	\N	\N	\N	\N	\N
31	Another test	test@contact.com	+971553333333	Event Date: 2026-01-01\nInterest: video\n\nThis is a test again for contact form	video	2025-12-30 06:12:11.406+00	2025-12-30 06:12:11.406+00	\N	\N	\N	\N	\N
32	SHUBHNEET JAIN	shubhneet@iboothme.com	054 540 5088	Event Date: 2026-01-01\nTest test sj	PartyBox Claw Machine	2025-12-30 10:48:28.751+00	2025-12-30 10:48:28.75+00					
33	SJ test 1	shubhneet@iboothme.com	0585864000	Event Date: 2026-01-15\nInterest: photo\n\ntest test test	photo	2025-12-30 10:51:23.34+00	2025-12-30 10:51:23.339+00	\N	\N	\N	\N	\N
34	sj test	shubhneet@iboothme.com	+9715656565656	Event Date: 2025-12-26\ngdfdfdds	Partybox Mini Photo Booth	2025-12-30 10:52:40.616+00	2025-12-30 10:52:40.616+00					
35	Modar	modarsabouni@gmail.com	0581010383	Event Date: 2025-12-01\ni need for full day 	Catch The Baton	2025-12-30 10:53:36.602+00	2025-12-30 10:53:36.602+00					
36	JSJSJSSS utm	shubhneet@iboothme.com	0585864000	Event Date: 2025-12-31\nInterest: video\n\nfdvdfgdfgdrfgde	video	2025-12-30 11:20:12.162+00	2025-12-30 11:20:12.162+00	\N	\N	\N	\N	\N
\.


--
-- Data for Name: media; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.media (id, alt, updated_at, created_at, url, thumbnail_u_r_l, filename, mime_type, filesize, width, height, focal_x, focal_y) FROM stdin;
1	Partybox Retro Photo Booth	2025-12-19 06:57:24.416+00	2025-12-19 06:57:24.415+00	\N	\N	retro-1.jpg	image/jpeg	358530	832	1248	50	50
2	Partybox Classic Photo Booth	2025-12-19 06:57:25.058+00	2025-12-19 06:57:25.058+00	\N	\N	original-1.jpg	image/jpeg	171338	832	1248	50	50
3	Partybox 360 Video Booth	2025-12-19 06:57:25.679+00	2025-12-19 06:57:25.678+00	\N	\N	rotating-1.jpg	image/jpeg	153406	832	1248	50	50
4	Partybox Mirror Photo Booth	2025-12-19 06:57:26.398+00	2025-12-19 06:57:26.398+00	\N	\N	mirror-1.jpg	image/jpeg	252225	832	1248	50	50
5	Partybox Mini Photo Booth	2025-12-19 06:57:27.033+00	2025-12-19 06:57:27.033+00	\N	\N	mini-1.jpg	image/jpeg	197292	832	1248	50	50
6	Scribble Booth	2025-12-19 06:57:27.634+00	2025-12-19 06:57:27.634+00	\N	\N	scribble-1.jpg	image/jpeg	185194	832	1248	50	50
7	Catch The Baton	2025-12-19 06:57:28.272+00	2025-12-19 06:57:28.272+00	\N	\N	catch-1.jpg	image/jpeg	92765	832	1248	50	50
26	Sketch Arm	2025-12-19 07:09:50.853+00	2025-12-19 07:09:50.853+00	\N	\N	sketch.jpg	image/jpeg	134609	832	1248	50	50
27	The Best Way to Share Eid Greetings and Fun with PartyBox Mirror Photo Booth in UAE	2025-12-19 07:19:09.373+00	2025-12-19 07:19:09.373+00	\N	\N	2411057-14Nov2024-192548.jpg	image/jpeg	755202	1001	1501	50	50
28	Unique Ideas to Make Your Traditional Event Stand Out with PartyBox 120 Slider	2025-12-19 07:19:11.24+00	2025-12-19 07:19:11.24+00	\N	\N	Capture.png	image/png	579118	438	655	50	50
29	Capturing Memories and Creating Fun – Include PartyBox Mirror at Your Eid Celebration Party	2025-12-19 07:19:14.188+00	2025-12-19 07:19:14.188+00	\N	\N	2411090-06Dec2024-210414.jpg	image/jpeg	1070914	1000	1500	50	50
30	From Backdrops to Props: Designing the Perfect Eid Gathering Party Photo Booth at Your Home	2025-12-19 07:19:16.166+00	2025-12-19 07:19:16.166+00	\N	\N	2501144-16Jan2025-202051.jpg	image/jpeg	867317	1001	1501	50	50
31	The Ultimate Guide to Iftar Party Photo Booth Props and Themes	2025-12-19 07:19:18.121+00	2025-12-19 07:19:18.121+00	\N	\N	2501161-30Jan2025-210249.jpg	image/jpeg	816353	1001	1501	50	50
32	Reasons to Throw a Graduate Party with Loved Ones	2025-12-19 07:19:20.679+00	2025-12-19 07:19:20.679+00	\N	\N	Photo-booth-Party.png	image/png	891735	1200	574	50	50
33	How Effectively Can You Plan Valentine’s Day for Your Beloved Wife in 2025?	2025-12-19 07:19:21.967+00	2025-12-19 07:19:21.967+00	\N	\N	Valentine-day-partybox.jpg	image/jpeg	43245	800	534	50	50
34	Modern technology in vintage photo booths	2025-12-19 07:19:23.496+00	2025-12-19 07:19:23.496+00	\N	\N	WhatsApp-Image-2025-01-06-at-4.44.15-PM.jpeg	image/jpeg	98094	1066	1600	50	50
35	Steps to Organize a Family Reunion Party on This New Year&#8217;s Eve in Dubai	2025-12-19 07:19:25.064+00	2025-12-19 07:19:25.063+00	\N	\N	new-years-eve-party.jpg	image/jpeg	288642	1200	800	50	50
8	partybox-gallery-1.jpg	2025-12-19 07:21:27.812+00	2025-12-19 06:57:31.534+00	/api/media/file/partybox-gallery-1.jpg	\N	partybox-gallery-10.jpg	image/jpeg	271919	1080	720	50	50
17	partybox-gallery-10.jpeg	2025-12-19 07:21:29.291+00	2025-12-19 06:57:35.278+00	/api/media/file/partybox-gallery-10.jpeg	\N	partybox-gallery-12.jpeg	image/jpeg	225392	756	1344	50	50
18	partybox-gallery-11.jpeg	2025-12-19 07:21:30.702+00	2025-12-19 06:57:35.631+00	/api/media/file/partybox-gallery-11.jpeg	\N	partybox-gallery-14.jpeg	image/jpeg	184298	756	1344	50	50
19	partybox-gallery-12.jpg	2025-12-19 07:21:32.285+00	2025-12-19 06:57:36.056+00	/api/media/file/partybox-gallery-12.jpg	\N	partybox-gallery-13.jpg	image/jpeg	234050	1080	1343	50	50
20	partybox-gallery-12.png	2025-12-19 07:21:34.741+00	2025-12-19 06:57:36.503+00	/api/media/file/partybox-gallery-12.png	\N	partybox-gallery-13.png	image/png	1251338	756	1344	50	50
21	partybox-gallery-13.jpeg	2025-12-19 07:21:36.823+00	2025-12-19 06:57:36.937+00	/api/media/file/partybox-gallery-13.jpeg	\N	partybox-gallery-15.jpeg	image/jpeg	118275	1080	608	50	50
22	partybox-gallery-14.jpg	2025-12-19 07:21:38.591+00	2025-12-19 06:57:37.372+00	/api/media/file/partybox-gallery-14.jpg	\N	partybox-gallery-18.jpg	image/jpeg	323445	1080	1278	50	50
23	partybox-gallery-15.jpg	2025-12-19 07:21:40.283+00	2025-12-19 06:57:37.728+00	/api/media/file/partybox-gallery-15.jpg	\N	partybox-gallery-19.jpg	image/jpeg	480876	1080	1559	50	50
24	partybox-gallery-16.jpg	2025-12-19 07:21:42.514+00	2025-12-19 06:57:38.149+00	/api/media/file/partybox-gallery-16.jpg	\N	partybox-gallery-20.jpg	image/jpeg	454221	1080	1559	50	50
25	partybox-gallery-17.jpg	2025-12-19 07:21:44.332+00	2025-12-19 06:57:38.567+00	/api/media/file/partybox-gallery-17.jpg	\N	partybox-gallery-21.jpg	image/jpeg	656437	1080	1559	50	50
9	partybox-gallery-2.jpg	2025-12-19 07:21:46.295+00	2025-12-19 06:57:31.902+00	/api/media/file/partybox-gallery-2.jpg	\N	partybox-gallery-11.jpg	image/jpeg	412069	1080	1620	50	50
10	partybox-gallery-3.jpg	2025-12-19 07:21:48.819+00	2025-12-19 06:57:32.348+00	/api/media/file/partybox-gallery-3.jpg	\N	partybox-gallery-12.jpg	image/jpeg	388411	1080	1619	50	50
11	partybox-gallery-4.jpg	2025-12-19 07:21:50.918+00	2025-12-19 06:57:32.766+00	/api/media/file/partybox-gallery-4.jpg	\N	partybox-gallery-14.jpg	image/jpeg	443939	1080	1619	50	50
12	partybox-gallery-5.jpg	2025-12-19 07:21:52.91+00	2025-12-19 06:57:33.21+00	/api/media/file/partybox-gallery-5.jpg	\N	partybox-gallery-15.jpg	image/jpeg	315972	1080	1620	50	50
13	partybox-gallery-6.jpg	2025-12-19 07:21:55.01+00	2025-12-19 06:57:33.636+00	/api/media/file/partybox-gallery-6.jpg	\N	partybox-gallery-16.jpg	image/jpeg	331710	1080	1620	50	50
14	partybox-gallery-7.jpg	2025-12-19 07:21:57.52+00	2025-12-19 06:57:33.993+00	/api/media/file/partybox-gallery-7.jpg	\N	partybox-gallery-17.jpg	image/jpeg	267653	1080	720	50	50
15	partybox-gallery-8.jpg	2025-12-19 07:21:59.789+00	2025-12-19 06:57:34.413+00	/api/media/file/partybox-gallery-8.jpg	\N	partybox-gallery-22.jpg	image/jpeg	440062	1080	1619	50	50
16	partybox-gallery-9.jpg	2025-12-19 07:22:01.92+00	2025-12-19 06:57:34.859+00	/api/media/file/partybox-gallery-9.jpg	\N	partybox-gallery-23.jpg	image/jpeg	226884	1080	1620	50	50
36	test-sj	2025-12-23 05:52:03.058+00	2025-12-23 05:52:03.058+00	\N	\N	partybox-gallery-23.webp	image/webp	27624	640	960	50	50
37	Mirror Booth	2025-12-24 10:20:48.675+00	2025-12-24 10:20:48.675+00	\N	\N	mirror-booth.jpg	image/jpeg	211260	1080	1649	50	50
38	Claw Machine	2025-12-24 10:27:09.158+00	2025-12-24 10:27:09.158+00	\N	\N	claw-machine.jpg	image/jpeg	251009	1080	1649	50	50
39	IMG-20251226-WA0001.jpg	2025-12-30 05:08:41.893+00	2025-12-30 05:08:41.893+00	\N	\N	IMG-20251226-WA0001.jpg	image/jpeg	174501	1002	1502	50	50
40	IMG-20251226-WA0002.jpg	2025-12-30 05:10:27.504+00	2025-12-30 05:10:27.504+00	\N	\N	IMG-20251226-WA0002.jpg	image/jpeg	273281	1024	1536	50	50
41	claw-machine	2025-12-31 05:14:32.061+00	2025-12-31 05:14:32.061+00	\N	\N	claw-machine-1.jpg	image/jpeg	770290	3118	4760	50	50
\.


--
-- Data for Name: payload_kv; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.payload_kv (id, key, data) FROM stdin;
\.


--
-- Data for Name: payload_locked_documents; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.payload_locked_documents (id, global_slug, updated_at, created_at) FROM stdin;
26	\N	2025-12-30 10:57:04.493+00	2025-12-30 10:57:04.491+00
\.


--
-- Data for Name: payload_locked_documents_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.payload_locked_documents_rels (id, "order", parent_id, path, users_id, media_id, booths_id, leads_id, posts_id, categories_id, tags_id, gallery_id, concepts_id) FROM stdin;
51	\N	26	document	\N	\N	\N	\N	12	\N	\N	\N	\N
52	\N	26	user	2	\N	\N	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: payload_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.payload_migrations (id, name, batch, updated_at, created_at) FROM stdin;
1	dev	-1	2025-12-31 06:18:23.586+00	2025-12-19 06:57:24.093+00
\.


--
-- Data for Name: payload_preferences; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.payload_preferences (id, key, value, updated_at, created_at) FROM stdin;
3	collection-users	{}	2025-12-19 07:11:14.03+00	2025-12-19 07:11:14.028+00
7	collection-categories	{}	2025-12-23 05:50:58.015+00	2025-12-23 05:50:58.014+00
2	collection-media	{"limit": 10, "editViewType": "default"}	2025-12-24 10:19:57.276+00	2025-12-19 07:01:45.783+00
1	collection-booths	{"limit": 10, "editViewType": "default"}	2025-12-24 10:26:21.225+00	2025-12-19 07:01:37.316+00
8	collection-tags	{}	2025-12-24 10:29:44.387+00	2025-12-24 10:29:44.387+00
5	collection-posts	{"limit": 10, "editViewType": "default"}	2025-12-25 09:50:27.84+00	2025-12-19 07:29:47.686+00
6	collection-leads	{"limit": 10, "editViewType": "default"}	2025-12-29 11:25:14.766+00	2025-12-22 11:09:25.517+00
9	collection-concepts	{"limit": 10, "editViewType": "default"}	2025-12-29 12:28:24.151+00	2025-12-29 12:28:00.893+00
10	collection-booths	{}	2025-12-29 15:26:04.018+00	2025-12-29 15:26:04.017+00
11	collection-users	{}	2025-12-29 15:26:26.378+00	2025-12-29 15:26:26.378+00
13	collection-gallery	{}	2025-12-30 05:07:02.165+00	2025-12-30 05:07:02.163+00
15	collection-categories	{}	2025-12-30 05:12:42.243+00	2025-12-30 05:12:42.242+00
16	collection-posts	{}	2025-12-30 05:12:48.186+00	2025-12-30 05:12:48.186+00
14	collection-concepts	{"limit": 10}	2025-12-30 05:15:58.052+00	2025-12-30 05:12:22.231+00
17	collection-media	{}	2025-12-30 05:23:13.288+00	2025-12-30 05:23:13.287+00
12	collection-leads	{"limit": 10}	2025-12-30 05:36:58.408+00	2025-12-29 15:26:33.214+00
18	collection-tags	{}	2025-12-30 05:37:31.257+00	2025-12-30 05:37:31.257+00
4	collection-gallery	{"limit": 10, "editViewType": "default"}	2025-12-30 05:56:04.427+00	2025-12-19 07:12:40.405+00
20	nav	{"groups": {"Globals": {"open": true}}}	2025-12-30 09:53:34.154+00	2025-12-30 09:53:34.234+00
19	nav	{"groups": {"Globals": {"open": true}}}	2025-12-31 05:31:54.621+00	2025-12-30 06:49:10.148+00
\.


--
-- Data for Name: payload_preferences_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.payload_preferences_rels (id, "order", parent_id, path, users_id) FROM stdin;
4	\N	3	user	1
9	\N	7	user	1
12	\N	2	user	1
13	\N	1	user	1
14	\N	8	user	1
15	\N	5	user	1
16	\N	6	user	1
20	\N	9	user	1
21	\N	10	user	2
22	\N	11	user	2
24	\N	13	user	2
26	\N	15	user	2
27	\N	16	user	2
28	\N	14	user	2
29	\N	17	user	2
30	\N	12	user	2
31	\N	18	user	2
32	\N	4	user	1
35	\N	20	user	2
37	\N	19	user	2
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.posts (id, title, slug, excerpt, content, featured_image_id, published_at, seo_title, seo_meta_description, seo_canonical_url, seo_json_ld, updated_at, created_at, _status) FROM stdin;
1	5 Reasons Your Wedding Needs a Photo Booth	5-reasons-your-wedding-needs-a-photo-booth	Thinking about a photo booth for your wedding? Here are 5 compelling reasons why it's a fantastic idea.	<h2>1. Entertainment for All Ages</h2><p>From your youngest cousins to your great-aunt, everyone loves a photo booth...</p><h2>2. A Perfect Icebreaker</h2><p>It gets guests mingling and laughing...</p><h2>3. Instant Party Favors</h2><p>Guests leave with a personalized memento...</p><h2>4. Create a Unique Guestbook</h2><p>Have guests stick a copy of their photo strip in a book and write a message...</p><h2>5. Captures Fun, Candid Moments</h2><p>While your photographer captures the formal shots, the booth captures the silly, candid moments...</p>	7	2023-10-26 10:00:00+00	5 Reasons Your Wedding Needs a Photo Booth	Thinking about a photo booth for your wedding? Here are 5 compelling reasons why it's a fantastic idea.	\N	\N	2025-12-19 06:57:29.438+00	2025-12-19 06:57:29.437+00	draft
2	How to Use a Photo Booth for Brand Activation	how-to-use-a-photo-booth-for-brand-activation	A photo booth is more than just fun; it's a powerful tool for marketing. Here's how to maximize its potential.	<h2>1. Branded Everything</h2><p>Custom backdrops, branded photo overlays, and a custom-wrapped booth...</p><h2>2. Social Media Integration</h2><p>Encourage sharing with a custom hashtag and instant social uploads...</p><h2>3. Data Capture</h2><p>Collect emails or survey responses in a fun, non-intrusive way...</p>	7	2023-10-20 10:00:00+00	How to Use a Photo Booth for Brand Activation	A photo booth is more than just fun; it's a powerful tool for marketing. Here's how to maximize its potential.	\N	\N	2025-12-19 06:57:30.84+00	2025-12-19 06:57:30.84+00	draft
3	The Best Way to Share Eid Greetings and Fun with PartyBox Mirror Photo Booth in UAE	the-best-way-to-share-eid-greetings-and-fun-with-partybox-mirror-photo-booth-in-uae	The Best Way to Share Eid Greetings and Fun with PartyBox Mirror Photo Booth in UAE - Partybox Photobooth Blog Celebrate Eid in style with the PartyBox Mirror Photo Booth! Capture high-quality photos, add Eid-themed props, and instantly share personalized Eid greetings with loved ones. Book your PartyBox Mirror Booth today! Visit partybox.ae	\n<p></p>\n\n\n\n<p>Eid is all about <strong>spreading joy, celebrating with loved ones, and making memories</strong>! 🕌✨ Whether you’re hosting a <strong>family gathering, corporate event, or community celebration</strong>, the <strong>PartyBox Mirror Photo Booth</strong> is the ultimate way to capture the festive spirit and share your <strong>Eid greetings in style!</strong></p>\n\n\n\n<h3 class="wp-block-heading"><strong>1. Make Every Eid Greeting Personal &amp; Fun! 🎉</strong></h3>\n\n\n\n<p>Instead of a simple “Eid Mubarak” message, let your guests <strong>create their own personalized Eid greetings</strong> with the interactive <strong>PartyBox Mirror Booth</strong>! ✅ <strong>Write personal messages on the mirror touchscreen</strong> ✍️ ✅ <strong>Take high-quality, print-worthy photos instantly</strong> 📸 ✅ <strong>Customize each print with an Eid Mubarak frame</strong> 🖼️</p>\n\n\n\n<p><strong>Bring the PartyBox Mirror Booth to your Eid celebration!</strong> <a href="https://partybox.ae/">Visit PartyBox.ae</a></p>\n\n\n\n<h3 class="wp-block-heading"><strong>2. Eid-Themed Props for Extra Fun! 🌙✨</strong></h3>\n\n\n\n<p>No photo booth is complete without <strong>props that match the celebration!</strong> Add an <strong>Eid touch</strong> with:</p>\n\n\n\n<ul class="wp-block-list">\n<li>“Eid Mubarak” &amp; “Ramadan Kareem” handheld signs</li>\n\n\n\n<li>Crescent moon &amp; lantern cutouts 🌙🏮</li>\n\n\n\n<li>Traditional accessories like abayas &amp; keffiyehs</li>\n\n\n\n<li>Gold &amp; silver balloons for a festive backdrop 🎈</li>\n</ul>\n\n\n\n<h3 class="wp-block-heading"><strong>3. Instantly Share Eid Greetings with Family &amp; Friends 📱</strong></h3>\n\n\n\n<p>Make your Eid celebration <strong>social media-worthy</strong> by letting guests: 📲 <strong>Instantly share their photos</strong> on Instagram, Facebook &amp; WhatsApp!<br>📲 <strong>Tag family &amp; friends in their personalized Eid greeting!</strong><strong><br></strong>📲 <strong>Use a fun Eid-themed digital filter to make it extra special!</strong></p>\n\n\n\n<h3 class="wp-block-heading"><strong>4. Make Your Eid Celebration One to Remember! 🎊</strong></h3>\n\n\n\n<p>Whether you’re hosting an <strong>Eid dinner, office party, or community event</strong>, the <strong>PartyBox Mirror Photo Booth</strong> ensures that every guest leaves with a <strong>beautiful keepsake and unforgettable experience</strong>.</p>\n\n\n\n<p>📩 <strong>Book your PartyBox Mirror Booth today!</strong> Email us at <strong>info@partybox.ae</strong> or visit <a href="https://partybox.ae/"><strong>partybox.ae</strong></a>.</p>\n\n\n\n<p></p>\n	27	2025-03-18 02:56:12+00	The Best Way to Share Eid Greetings and Fun with PartyBox Mirror Photo Booth in UAE - Partybox Photobooth Blog The Best Way to Share Eid Greetings and Fun with PartyBox Mirror Photo Booth in UAE	The Best Way to Share Eid Greetings and Fun with PartyBox Mirror Photo Booth in UAE - Partybox Photobooth Blog Celebrate Eid in style with the PartyBox Mirror P	\N	\N	2025-12-19 07:19:09.767+00	2025-12-19 07:19:09.766+00	draft
4	Unique Ideas to Make Your Traditional Event Stand Out with PartyBox 120 Slider	unique-ideas-to-make-your-traditional-event-stand-out-with-partybox-120slider	Unique Ideas to Make Your Traditional Event Stand Out with PartyBox 120 Slider - Partybox Photobooth Blog	\n<p>Traditional events are all about <strong>celebrating culture, creating memories, and bringing people together</strong>! 🏮✨ If you want to add a <strong>modern, fun, and interactive</strong> element to your next <strong>Eid celebration, wedding, or cultural event</strong>, the <strong>PartyBox 120 Slider</strong> is your perfect match! 📸 Here’s how you can make your event unforgettable with this <strong>dynamic video booth experience</strong>.</p>\n\n\n\n<h3 class="wp-block-heading"><strong>1. What is the PartyBox 120 Slider? 🎥✨</strong></h3>\n\n\n\n<p>Unlike traditional photo booths, the <strong>PartyBox 120 Slider</strong> captures <strong>smooth, slow-motion 120-degree videos</strong> that give guests a <strong>cinematic experience</strong>. It’s like <strong>a mini red-carpet moment for everyone at your event!</strong></p>\n\n\n\n<p>✅ <strong>Creates stunning boomerang-style videos</strong> ✅ <strong>Adds motion effects for a dramatic touch</strong> ✅ <strong>Instant digital sharing for social media buzz</strong></p>\n\n\n\n<p>&nbsp;<strong>See how PartyBox 120 Slider takes events to the next level!</strong> <a href="https://www.youtube.com/watch?v=M48azd5whPg">Check it out here.</a></p>\n\n\n\n<h3 class="wp-block-heading"><strong>2. Themed Backdrops to Match Your Traditional Event 🏛️🎊</strong></h3>\n\n\n\n<p>A <strong>custom backdrop</strong> enhances the magic of the <strong>120-degree slow-motion effect</strong>! Here are some ideas:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Elegant Arabic Calligraphy Designs</strong> – Perfect for an <strong>Eid or Ramadan gathering</strong>.</li>\n\n\n\n<li><strong>Golden Majlis Setup</strong> – Adds a <strong>luxurious Emirati feel</strong> to your celebration.</li>\n\n\n\n<li><strong>Floral &amp; Vintage Vibes</strong> – Great for <strong>weddings and special family occasions</strong>.</li>\n\n\n\n<li><strong>Cityscape of Your Homeland</strong> – Showcasing <strong>beautiful UAE landmarks</strong> as a backdrop.</li>\n</ul>\n\n\n\n<h3 class="wp-block-heading"><strong>3. Props to Elevate the Fun! 🎭📸</strong></h3>\n\n\n\n<p>Props make every shot unique! Choose from <strong>fun and traditional</strong> options:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Emirati flags &amp; cultural items</strong> 🇦🇪</li>\n\n\n\n<li><strong>Lanterns &amp; crescent moons for Eid</strong> 🌙</li>\n\n\n\n<li><strong>Golden picture frames for a royal touch</strong> 🖼️</li>\n\n\n\n<li><strong>Themed headpieces &amp; accessories</strong> 👑</li>\n</ul>\n\n\n\n<h3 class="wp-block-heading"><strong>4. Why Your Guests Will LOVE It! ❤️</strong></h3>\n\n\n\n<p>🎥 <strong>It’s an experience, not just a photo booth!</strong><strong><br></strong>🎥 <strong>Instant social media sharing = More engagement!</strong><strong><br></strong>🎥 <strong>Creates premium, high-quality videos that guests will keep forever!</strong></p>\n\n\n\n<p>📩 <strong>Make your traditional event unforgettable with Partybox 120 slider!</strong> Email us at <strong>info@partybox.ae</strong> or visit <a href="https://partybox.ae/"><strong>partybox.ae</strong></a>.</p>\n	28	2025-03-18 02:52:51+00	Unique Ideas to Make Your Traditional Event Stand Out with PartyBox 120 Slider - Partybox Photobooth Blog Unique Ideas to Make Your Traditional Event Stand Out with PartyBox 120 Slider	Unique Ideas to Make Your Traditional Event Stand Out with PartyBox 120 Slider - Partybox Photobooth Blog	\N	\N	2025-12-19 07:19:11.537+00	2025-12-19 07:19:11.536+00	draft
5	Capturing Memories and Creating Fun – Include PartyBox Mirror at Your Eid Celebration Party	capturing-memories-creating-fun-include-partybox-mirror-at-your-eid-celebration-party	Capturing Memories and Creating Fun – Include PartyBox Mirror at Your Eid Celebration Party - Partybox Photobooth Blog	\n<p></p>\n\n\n\n<p>Eid celebrations are all about <strong>family, laughter, and unforgettable moments</strong>! 🎉 If you’re looking for a way to <strong>capture the joy</strong> and <strong>add a touch of magic</strong> to your party, the <strong>PartyBox Mirror Booth</strong> is the perfect addition. Here’s why this interactive photo booth will make your <strong>Eid celebration party</strong> one to remember! 📸✨</p>\n\n\n\n<h3 class="wp-block-heading"><strong>1. The Ultimate Interactive Experience 🪞✨</strong></h3>\n\n\n\n<p>The <strong>PartyBox Mirror Booth</strong> isn’t just a photo booth—it’s an <strong>interactive experience</strong> that keeps guests entertained! Here’s what makes it special:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Touchscreen fun</strong> – Guests can <strong>sign their names</strong> or add emojis to their photos.</li>\n\n\n\n<li><strong>Instant prints</strong> – Walk away with a <strong>beautifully framed keepsake</strong> from the celebration.</li>\n\n\n\n<li><strong>Eid-themed animations &amp; frames</strong> – Custom-designed overlays to match your party’s vibe.</li>\n</ul>\n\n\n\n<p><strong>Upgrade your Eid celebration with the PartyBox Mirror Booth!</strong><a href="https://www.youtube.com/shorts/l08JB6uupzY"> Explore Here</a></p>\n\n\n\n<h3 class="wp-block-heading"><strong>2. Elevate Your Eid Celebration with Stunning Photos 📸🎊</strong></h3>\n\n\n\n<p>No Eid party is complete without <strong>capturing those special moments</strong>! The <strong>PartyBox Mirror Booth</strong> lets you: ✅ <strong>Take high-quality, studio-style photos</strong> ✨ ✅ <strong>Get creative with themed props &amp; festive backdrops</strong> 🎭 ✅ <strong>Print unlimited photos instantly</strong> 📸 ✅ <strong>Share digital copies right away!</strong> 📱</p>\n\n\n\n<h3 class="wp-block-heading"><strong>3. Fun Eid Props to Make Your Photos POP! 🎭</strong></h3>\n\n\n\n<p>Make every photo extra special with <strong>Eid-themed props</strong> like:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>“Eid Mubarak” speech bubbles</strong></li>\n\n\n\n<li><strong>Crescent moon &amp; lantern cutouts</strong> 🌙🏮</li>\n\n\n\n<li><strong>Golden picture frames</strong> for a classy touch</li>\n\n\n\n<li><strong>Traditional accessories like keffiyehs &amp; abayas</strong></li>\n</ul>\n\n\n\n<h3 class="wp-block-heading"><strong>4. Hassle-Free, Fun-Filled Setup! 🚀</strong></h3>\n\n\n\n<p>The <strong>PartyBox team</strong> takes care of everything—<strong>from setup to breakdown</strong>—so you can focus on enjoying your celebration. Just <strong>smile, pose, and let the Mirror Booth do the magic!</strong></p>\n\n\n\n<p>📩 <strong>Book your PartyBox Mirror Booth today!</strong> Email us at <strong>info@partybox.ae</strong> or visit <a href="https://partybox.ae/"><strong>partybox.ae</strong></a>.</p>\n	29	2025-03-18 02:31:06+00	Capturing Memories and Creating Fun – Include PartyBox Mirror at Your Eid Celebration Party - Partybox Photobooth Blog Capturing Memories and Creating Fun – Include PartyBox Mirror at Your Eid Celebration Party	Capturing Memories and Creating Fun – Include PartyBox Mirror at Your Eid Celebration Party - Partybox Photobooth Blog	\N	\N	2025-12-19 07:19:14.536+00	2025-12-19 07:19:14.536+00	draft
6	From Backdrops to Props: Designing the Perfect Eid Gathering Party Photo Booth at Your Home	designing-perfect-eid-gathering-party-photo-booth-at-home	From Backdrops to Props: Designing the Perfect Eid Gathering Party Photo Booth at Your Home - Partybox Photobooth Blog Create an unforgettable Eid gathering party photo booth at home! From stunning Eid backdrops to festive props, interactive Mirror Booth features, and customized prints, turn every click into a keepsake. Book your Eid photo booth today! Visit partybox.ae	\n<p></p>\n\n\n\n<p>Eid is all about family, friends, and creating <strong>joyful memories</strong>. What better way to capture those moments than with a <strong>PartyBox photo booth</strong> at home? 🏡✨ Whether you’re planning a <strong>big Eid gathering</strong> or an <strong>intimate celebration</strong>, the right backdrops and props can <strong>elevate the fun</strong> and turn every click into a keepsake!</p>\n\n\n\n<h3 class="wp-block-heading"><strong>1. Set the Scene with a Stunning Eid Backdrop 🌙🕌</strong></h3>\n\n\n\n<p>A <strong>beautiful backdrop</strong> is the foundation of an amazing <strong>Eid gathering party photo booth</strong>! Here are some fun ideas to match your celebration’s vibe:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Golden Ramadan Glow:</strong> Elegant gold and white décor with fairy lights and crescent moon cutouts.</li>\n\n\n\n<li><strong>Arabian Nights:</strong> Deep blues, purples, and gold accents with plush cushions and Moroccan lanterns.</li>\n\n\n\n<li><strong>Floral Eid Magic:</strong> A flower wall with “Eid Mubarak” in calligraphy.</li>\n\n\n\n<li><strong>Minimalist Elegance:</strong> A simple white curtain backdrop with LED string lights for a classy look.</li>\n</ul>\n\n\n\n<p>🔗 <strong>Find the perfect PartyBox backdrop for your Eid event:</strong> <a href="https://partybox.ae/">Visit PartyBox.ae</a></p>\n\n\n\n<h3 class="wp-block-heading"><strong>2. Must-Have Props for Your Eid Photo Booth 🎭✨</strong></h3>\n\n\n\n<p>Props bring <strong>energy and personality</strong> to every picture! Get creative with these Eid-themed photo booth props:</p>\n\n\n\n<p>✅ <strong>Handheld Signs:</strong> “Eid Mubarak,” “Halal Selfie,” or “Where’s My Biryani?” ✅ <strong>Traditional Accessories:</strong> Keffiyehs, abayas, and decorative prayer beads. ✅ <strong>Festive Items:</strong> Mini lanterns, crescent moon wands, and golden confetti. ✅ <strong>Food-Themed Fun:</strong> Hold up giant falafel, baklava, or Arabic coffee cups for a <strong>quirky twist</strong>!</p>\n\n\n\n<h3 class="wp-block-heading"><strong>3. Add a Touch of Magic with the PartyBox Mirror Booth! 🪞✨</strong></h3>\n\n\n\n<p>Make your <strong>Eid celebration photo booth</strong> interactive with the <strong>PartyBox Mirror Booth</strong>:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Touchscreen animations &amp; fun prompts</strong> 🖊️</li>\n\n\n\n<li><strong>Instant prints with custom Eid frames</strong> 🖼️</li>\n\n\n\n<li><strong>Guests can sign their names on photos</strong> ✍🏼</li>\n</ul>\n\n\n\n<p><strong>Upgrade your Eid celebration with the PartyBox Mirror Booth!</strong><a href="https://www.youtube.com/shorts/l08JB6uupzY"> Explore Here</a></p>\n\n\n\n<h3 class="wp-block-heading"><strong>4. Keep It Personal &amp; Share the Fun! 🎉📱</strong></h3>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Customized Eid Cards:</strong> Let guests take home their photos with a <strong>personalized Eid Mubarak message</strong>.</li>\n\n\n\n<li><strong>Digital Sharing:</strong> Guests can <strong>instantly share</strong> their photos on social media.</li>\n\n\n\n<li><strong>Create a Memory Wall:</strong> Print photos and stick them on a <strong>photo collage board</strong>!</li>\n</ul>\n\n\n\n<h3 class="wp-block-heading"><strong>5. Get Ready for the Ultimate Eid Celebration! 🎊</strong></h3>\n\n\n\n<p>Your <strong>Eid gathering at home</strong> deserves <strong>fun, laughter, and the best memories captured forever</strong>. With <strong>PartyBox photo booths, props, and backdrops</strong>, every click turns into a keepsake!</p>\n\n\n\n<p>📩 <strong>Book your Eid photo booth today!</strong> Email us at <strong>info@partybox.ae</strong> or visit <a href="https://partybox.ae/"><strong>partybox.ae</strong></a>.</p>\n	30	2025-03-18 02:27:42+00	From Backdrops to Props: Designing the Perfect Eid Gathering Party Photo Booth at Your Home - Partybox Photobooth Blog Designing the Perfect Eid Gathering Party Photo Booth at Home	From Backdrops to Props: Designing the Perfect Eid Gathering Party Photo Booth at Your Home - Partybox Photobooth Blog Create an unforgettable Eid gathering par	\N	\N	2025-12-19 07:19:16.532+00	2025-12-19 07:19:16.532+00	draft
7	The Ultimate Guide to Iftar Party Photo Booth Props and Themes	iftar-party-photo-booth-props	The Ultimate Guide to Iftar Party Photo Booth Props and Themes - Partybox Photobooth Blog Make your Iftar party unforgettable with a PartyBox photo booth! 🌙✨ From Arabian Nights backdrops to Ramadan-themed props, interactive Mirror Booth fun, and branded prints, create a memorable experience for family gatherings, corporate Iftars, and community events. 📸 Book your Iftar photo booth today! Visit partybox.ae	\n<p>Ramadan is a time of reflection, togetherness, and of course—celebrations! As the sun sets and families gather for <strong>Iftar</strong>, why not make the moment extra special with a <strong>PartyBox photo booth</strong>? 📸✨ Whether you&#8217;re hosting an intimate family gathering or a big community iftar, the right <strong>photo booth props and themes</strong> can take your event from simple to spectacular! Here’s your <strong>ultimate guide</strong> to setting up the best Iftar party photo booth.</p>\n\n\n\n<h3 class="wp-block-heading"><strong>1. Choose the Perfect Iftar Party Theme 🌙✨</strong></h3>\n\n\n\n<p>Themes set the mood and add a <strong>cohesive aesthetic</strong> to your event. Here are some trendy Iftar <strong>photo booth themes</strong> that will make your pictures pop:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Arabian Nights</strong>: Think <strong>gold accents, ornate lanterns, and deep blue backdrops</strong>.</li>\n\n\n\n<li><strong>Modern Minimalist Ramadan</strong>: A sleek white and gold design with elegant calligraphy.</li>\n\n\n\n<li><strong>Starry Ramadan Sky</strong>: Deep navy tones with <strong>twinkling lights</strong> and crescent moons.</li>\n\n\n\n<li><strong>Traditional Majlis Setup</strong>: A rich red and gold majlis backdrop with cushions and coffee pots.</li>\n</ul>\n\n\n\n<h3 class="wp-block-heading"><strong>2. Must-Have Iftar Photo Booth Props 🏮🕌</strong></h3>\n\n\n\n<p>Props make the experience more engaging and fun for guests! Here are some must-haves:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Handheld Ramadan Signs</strong>: “Eid Mubarak,” “Iftar Time!,” or “Fasting Mode: Off!”</li>\n\n\n\n<li><strong>Traditional Tea &amp; Coffee Cups</strong> ☕️: Authentic Emirati-style props for that cultural touch.</li>\n\n\n\n<li><strong>Lanterns &amp; Crescent Moons</strong> 🌙: Classic symbols of Ramadan for a magical glow.</li>\n\n\n\n<li><strong>Decorated Prayer Mats &amp; Tasbih (Prayer Beads)</strong>: Adds an <strong>authentic spiritual element</strong> to the photos.</li>\n\n\n\n<li><strong>Golden Picture Frames</strong>: Give guests a way to frame their favorite moments beautifully.</li>\n</ul>\n\n\n\n<p>&nbsp;<strong>See how PartyBox photo booths create unforgettable moments:</strong> <a href="https://www.youtube.com/watch?v=6LXRnUkYq3g">Watch on YouTube</a></p>\n\n\n\n<h3 class="wp-block-heading"><strong>3. Interactive Photo Booth Fun with PartyBox Mirror! 🪞✨</strong></h3>\n\n\n\n<p>Take your <strong>Iftar photo booth experience</strong> to the next level with the <strong>PartyBox Mirror Booth</strong>. It’s not just a camera—it’s an interactive <strong>touchscreen mirror</strong> that lets guests: ✅ Strike a pose with <strong>fun Ramadan-themed animations</strong> ✅ Sign their names or add personal messages to photos ✅ Get instant prints with <strong>customized Ramadan frames</strong></p>\n\n\n\n<p><strong>Upgrade your Iftar party with the PartyBox Mirror Booth:</strong> <a href="https://www.youtube.com/shorts/l08JB6uupzY">Explore Here</a></p>\n\n\n\n<h3 class="wp-block-heading"><strong>4. Customizing Your Photo Booth for a Personal Touch 🖌️</strong></h3>\n\n\n\n<p>Make your <strong>Iftar celebration unique</strong> by personalizing your <strong>photo booth setup</strong>:</p>\n\n\n\n<ul class="wp-block-list">\n<li><strong>Customized Ramadan Backdrops</strong>: Feature <strong>family names, company logos, or a special Ramadan greeting</strong>.</li>\n\n\n\n<li><strong>Branded Prints</strong>: Add a <strong>Ramadan Kareem message</strong> on every photo strip.</li>\n\n\n\n<li><strong>Personalized QR Codes</strong>: Let guests <strong>download and share their photos instantly</strong>.</li>\n</ul>\n\n\n\n<h3 class="wp-block-heading"><strong>5. Create a Social Media Buzz! 📱</strong></h3>\n\n\n\n<p>Encourage guests to <strong>share their Iftar photo booth moments</strong> by setting up a <strong>social media corner</strong>: 🚀 <strong>Create a custom event hashtag</strong> (e.g., #IftarWithPartyBox)<br>🚀 <strong>Set up an Instagram-friendly backdrop</strong> for extra photos<br>🚀 <strong>Live Display:</strong> Showcase guest photos on a big screen for <strong>real-time fun</strong></p>\n\n\n\n<h3 class="wp-block-heading"><strong>Make Your Iftar Party Unforgettable with PartyBox! 🎊</strong></h3>\n\n\n\n<p>Adding a <strong>photo booth with the perfect props and themes</strong> turns your Iftar gathering into a truly <strong>unforgettable experience</strong>. Whether you’re hosting a <strong>corporate iftar, a family event, or a Ramadan community gathering</strong>, <strong>PartyBox has the perfect photo booth for you!</strong></p>\n\n\n\n<p>📩 <strong>Book your Iftar photo booth today!</strong> Email us at <strong>info@partybox.ae</strong> or visit <a href="https://partybox.ae/"><strong>partybox.ae</strong></a>.</p>\n\n\n\n<p></p>\n	31	2025-03-18 02:23:12+00	The Ultimate Guide to Iftar Party Photo Booth Props and Themes - Partybox Photobooth Blog Iftar Party Photo Booth Props	The Ultimate Guide to Iftar Party Photo Booth Props and Themes - Partybox Photobooth Blog Make your Iftar party unforgettable with a PartyBox photo booth! 🌙✨ F	\N	\N	2025-12-19 07:19:18.413+00	2025-12-19 07:19:18.413+00	draft
8	Reasons to Throw a Graduate Party with Loved Ones	reasons-to-throw-a-graduate-party-with-loved-ones	Reasons to Throw a Graduate Party with Loved Ones. A 360 Photo booth Rental option should be included to capture all moments of your guests for their whole life.	\n<p>Celebrating your success with your loved ones is mandatory to mark the era with victory. Whether you have won a business deal or graduated from high school, the celebration is a must, and you must include everyone in the party with whom you feel comfortable. However, celebrating the graduation party with your friends and family will give you much pleasure, and it is the best way to mark the end of the era. After spending a dedicated life on your studies, it is time to start your new professional career. Everyone should be part of the graduation party, and you can create memories with them. Say goodbye to overnight studies and get ready to welcome your professional life to choose the way you dream for a long time. Never forget to create memories of the day to save them in your album and share them with your friends on social media.</p>\n\n\n\n<h2 class="wp-block-heading">Why Do You Plan to Throw a Graduate Party?</h2>\n\n\n\n<p>You have to celebrate the big success of your life with your loved ones. Your family and friends will join you to congratulate you on your achievement, and they will share their best wishes for the future. It is the best moment to share with everyone, and a graduate party should include an <strong><u>AI Photo booth rental Dubai</u></strong> option to create your memories for your whole life. It is one of the best solutions that will click your graduate party photos with a special background, and you must have props for the guests to take in their hands for the photos.</p>\n\n\n\n<p>Laugh, enjoy, and celebrate the day with lots of joy and happiness with your loved ones. If your house is spacious enough for this party, throwing a party in the outdoor area would be a good decision. You can better decide the venue according to the guests. If asked why you are throwing a party, you must have some reasons to tell anyone. Here is a simple solution for everyone:</p>\n\n\n\n<h2 class="wp-block-heading">Reasons You Are Throwing a Graduate Party</h2>\n\n\n\n<p>Completing the graduation is a milestone you have cleared with your deep effort. Restless nights, overnight studies, and future plans will motivate you to achieve your targeted goals immediately. Here are some reasons to celebrate this big achievement with your friends and family.</p>\n\n\n\n<h3 class="wp-block-heading">1.&nbsp;&nbsp;&nbsp;&nbsp; You are Celebrating an Amazing Achievement</h3>\n\n\n\n<p>Undoubtedly, graduating from high school. College, or grad school, is a big milestone in anyone’s life. If you want to start further studies after graduation to explore the world, you must celebrate the moment of joy with your close relatives and friends. It is the perfect time to joyfully celebrate your past, present, and future. You must choose the best venue for the graduation party and invite everyone.</p>\n\n\n\n<h3 class="wp-block-heading">2.&nbsp;&nbsp;&nbsp;&nbsp; Celebration for the Start of the New Era</h3>\n\n\n\n<p>Graduating from grad school indicates that you will start a new era. You are free to share your expressions with all guests. Everyone will appreciate your effort, and you will surely get best wishes for the future. Everyone has to celebrate this day with their loved ones and focus on future goals sincerely.</p>\n\n\n\n<h3 class="wp-block-heading">3.&nbsp;&nbsp;&nbsp;&nbsp; Allow Your Well-Wishers to Celebrate the Big Day with You</h3>\n\n\n\n<p>You need to create a guest list for the party. Make sure to include all close relatives and friends. Decide the day, time, and venue to share updates with your guests. You need to choose the best venue whether you will throw the success party at your home or outside the premises. A <strong><u><a href="https://partybox.ae/">360 Photobooth</a></u></strong> option should be included to capture all moments of your guests for their whole life. Send invitations carefully and make sure you have invited everyone to the party.</p>\n\n\n\n<h3 class="wp-block-heading">4.&nbsp;&nbsp;&nbsp;&nbsp; It is Not an Expensive Party Like Others</h3>\n\n\n\n<p>Usually, graduates prefer to celebrate their success with everyone by throwing a party because this type of party is quite different from other OTT parties. It is up to you what type of party you want to arrange and what budget you have maintained for the celebration.</p>\n\n\n\n<h3 class="wp-block-heading">5.&nbsp;&nbsp;&nbsp;&nbsp; It’s a Chance to Mark the End of an Era</h3>\n\n\n\n<p>Finally, this celebration has a big reason: you will mark an era&#8217;s end. It is the time to start exploring the opportunities to achieve your dream goals. This would be a remarkable day that no one will forget. Thank your parents, teachers, and all well-wishers for achieving your targeted goal. An attractive and full of emotional speech should be your parents to say thank you for their effort. Enjoy the party time.</p>\n	32	2025-01-17 07:32:08+00	Reasons to Throw a Graduate Party with Loved Ones - Photo Booth	Reasons to Throw a Graduate Party with Loved Ones. A 360 Photo booth Rental option should be included to capture all moments of your guests for their whole life	\N	\N	2025-12-19 07:19:20.971+00	2025-12-19 07:19:20.971+00	draft
9	How Effectively Can You Plan Valentine’s Day for Your Beloved Wife in 2025?	how-effectively-can-you-plan-valentines-day-for-your-beloved-wife-in-2025	How Effectively Can You Plan Valentine’s Day for Your Beloved Wife in 2025? A Photobooth is Compulsory for the Day.	\n<p>We all know Valentine’s Day is approaching in 2025, and you must make this day more special for your wife. It is the day everyone can express their love and feelings to their loved ones. You must consider it important to choose flowers for Valentine’s Day to make her day more luxurious by presenting a fresh flower bouquet. A Valentine’s Day can be more special if you choose fresh and beautiful flowers for your beloved wife to show your love and feelings. We do not need a special day to express our love and feelings to someone in our life. This day is more special for everyone and will deliver your message to others.</p>\n\n\n\n<h2 class="wp-block-heading">How to Make Her Day Perfect?</h2>\n\n\n\n<p>This Valentine’s, you can make your wife happier by planning several things that will be perfect. You must read the whole discussion until the end to understand everything perfectly. Everything will get set perfectly, and you might find these options more impressive and useful.</p>\n\n\n\n<h3 class="wp-block-heading">1.&nbsp;&nbsp;&nbsp;&nbsp; Start the Day with a Beautiful Gift</h3>\n\n\n\n<p>It will be more effective to start her day with the beautiful flowers. There are many options available in Dubai from where you can get fresh flowers for her. Make sure you have selected the right option for this purpose, and the flower delivery should be quick in your living place. A special Valentine’s bouquet will add happiness to her day and be a wonderful start. The bouquet should have some gift that will enhance the real-time beauty factor of it. Moreover, you can better check the ideas available on the internet that you can use for the loved one to make her happy.</p>\n\n\n\n<h3 class="wp-block-heading">2.&nbsp;&nbsp;&nbsp;&nbsp; Plan for a Lunch or Dinner</h3>\n\n\n\n<p>It would be a good option to plan lunch or dinner with your wife so that we can have a beautiful time together. Multiple options are available, and you can choose the right option. If your wife is a working lady, pick her up from her workplace and take her for lunch; this is one of the best feelings she will feel for you. If you are happy with the dinner plan, book a table with balloons and a bottle of champagne.</p>\n\n\n\n<h3 class="wp-block-heading">3.&nbsp;&nbsp;&nbsp;&nbsp; Take Her for the Shopping</h3>\n\n\n\n<p>Take her for the shopping because it is one of the most favorite activities of women. Buy her the most beautiful dress to wear today, and you better know how you can complete her perfect beauty. It would be a good option to take her to the preferred shopping mall where she would find herself more comfortable buying anything. You have to spend the whole day with her to make her feel good and loving.</p>\n\n\n\n<h3 class="wp-block-heading">4.&nbsp;&nbsp;&nbsp;&nbsp; A Photobooth is Compulsory for the Day</h3>\n\n\n\n<p>You must choose the <strong><a href="https://partybox.ae/">AI photo booth rental Dubai</a></strong> option at your private party. Book the best place in the restaurant or at your place to set this Photobooth with the best backdrop. It will help you to click amazing photos to remind you of the day forever. A photo booth is a good solution for creating such memories. It would be good to have a <strong><a href="https://partybox.ae/">360-photo booth</a></strong> option to click your best photos with your beloved wife and keep them all in your private album. Find the best option around you in Dubai to get these amazing options for the day to make it more special.</p>\n\n\n\n<h3 class="wp-block-heading">5.&nbsp;&nbsp;&nbsp;&nbsp; Enjoy Her Favorite Food</h3>\n\n\n\n<p>This Valentine’s Day, you need to pick up your wife at her favorite restaurant and order her favorite food to enjoy. Make sure to avail herself of the online flower delivery Dubai option at the restaurant, which impressively makes her feel good. Usually, couples prefer to present beautiful flowers to their loved ones on this occasion. You must go for this option and see her happy face glow impressively. You must know about her favorite flowers and add the combination when ordering the bouquet from anywhere.</p>\n\n\n\n<h3 class="wp-block-heading">6.&nbsp;&nbsp;&nbsp;&nbsp; A Beach Walk is Compulsory</h3>\n\n\n\n<p>It is time to feel relaxed and calm and choose the best spot where you both can walk by. It reminds you of those days when you met for the first time. Recall your memories with your loving partner; it will refresh your mood and be a good decision. You must find the best place to spend quality time with your loved one. All things will get set better, and you might find this option useful and effective.</p>\n\n\n\n<h2 class="wp-block-heading">Final Wordings</h2>\n\n\n\n<p>All these points we have shared with you are most important. You must consider these points compulsory to spend quality time with your loved one. This Valentine’s, you should plan something special that may share your feelings, love, and care with your wife. You have to order special flowers for a loved one and choose the best gift option that may provide you with the ultimate solution to make your day more impressive and luxurious. Ensure that you are ready to be with her for the whole day.</p>\n	33	2025-01-13 07:26:05+00	How Effectively Can You Plan Valentine’s Day for Your Beloved Wife in 2025?	How Effectively Can You Plan Valentine’s Day for Your Beloved Wife in 2025? A Photobooth is Compulsory for the Day.	\N	\N	2025-12-19 07:19:22.515+00	2025-12-19 07:19:22.515+00	draft
10	Modern technology in vintage photo booths	modern-technology-in-vintage-photo-booths	Modern technology in vintage photo booths - Partybox Photobooth Blog	\n<p>Unveiling the Charm of the PartyBox Vintage Booth: A Timeless Experience</p>\n\n\n\n<p>In a world dominated by technology, the PartyBox Vintage Booth offers a delightful blend of nostalgia and innovation, creating an unforgettable photo experience for your guests. With its elegant wooden finish, brass accents, and retro design, it adds timeless charm to any event. Inside, modern features like high-resolution photography, customizable lighting, and seamless social media sharing bring the vintage look to life.</p>\n\n\n\n<p>Perfect for Every Occasion</p>\n\n\n\n<p>Whether it&#8217;s a wedding, birthday, or corporate gathering, the PartyBox Vintage Booth brings fun and sophistication to any celebration. Guests can enjoy taking photos, GIFs, and boomerangs, all while embracing a nostalgic atmosphere.</p>\n\n\n\n<p>Fully Customizable Experience</p>\n\n\n\n<p>The booth offers endless customization options, including props, backdrops, and templates that can be tailored to fit your event’s theme, making each experience unique.</p>\n\n\n\n<p>Easy to Use and Hassle-Free</p>\n\n\n\n<p>Setting up the PartyBox Vintage Booth is simple. PartyBox handles the delivery, installation, and operation, ensuring a seamless experience for you and your guests.</p>\n\n\n\n<p>Instantly Share Memories</p>\n\n\n\n<p>Guests can instantly share their photos via email or social media, plus receive physical prints as a keepsake.</p>\n\n\n\n<p>Why Choose the PartyBox Vintage Booth?</p>\n\n\n\n<ul class="wp-block-list">\n<li>Timeless Appeal: Classic design with modern features.</li>\n\n\n\n<li>Customizable Options: Personalize with props and templates.</li>\n\n\n\n<li>Instant Sharing: Share memories instantly.</li>\n\n\n\n<li>High-Quality Photos: Stunning clarity in every shot.</li>\n\n\n\n<li>Make Your Event Unforgettable</li>\n</ul>\n\n\n\n<p>The PartyBox Vintage Booth is more than just a photo booth; it’s an experience that adds fun and elegance to your event. Create lasting memories with this perfect blend of past and present.</p>\n\n\n\n<p>Book the PartyBox Vintage Booth Today</p>\n\n\n\n<p>Ready to elevate your event? Contact PartyBox to book the Vintage Booth and give your guests a unique, nostalgic experience they won’t forget.</p>\n	34	2025-01-10 08:38:58+00	Modern technology in vintage photo booths - Partybox Photobooth Blog	Modern technology in vintage photo booths - Partybox Photobooth Blog	\N	\N	2025-12-19 07:19:23.873+00	2025-12-19 07:19:23.873+00	draft
11	Steps to Organize a Family Reunion Party on This New Year&#8217;s Eve in Dubai	steps-to-organize-a-family-reunion-party-on-this-new-years-eve-in-dubai	New Year Party Photo Booth rental in Dubia, UAE. Steps to Organize a Family Reunion Party on This New Year's Eve in Dubai.	\n<p>Are you planning to organize a family New Year party at your home? Do you want to make your New Year party memorable? A celebration with your family members and loved ones will definitely share laughter, magical moments, and a unique festive atmosphere. If you are not an expert in organizing such parties, this discussion will help you create magical moments for everyone by following these tips. This festive event is more than a party; it is all about closing old chapters and opening the door to a new project. Start your new year with happiness and love with each other to make your moments unforgettable.</p>\n\n\n\n<h2 class="wp-block-heading">How to Create a Wow Factor in Your New Year&#8217;s Eve Family Reunion Party?</h2>\n\n\n\n<p>If you are investing your time and effort in organizing the family reunion New Year&#8217;s party, you must prefer to make it perfect from all sides. Here are some of the best options you must consider compulsory to make your New Year&#8217;s Eve family reunion party fabulous and unforgettable.</p>\n\n\n\n<h3 class="wp-block-heading">1.&nbsp;&nbsp;&nbsp;&nbsp; Start Defining the Theme of the New Year’s Eve Party</h3>\n\n\n\n<p>Let’s start by selecting an impressive New Year&#8217;s family reunion party theme. This is a key step that will ensure a festive, memorable atmosphere. The theme selection will immediately set the tone for the event&#8217;s structure and preparation. It will include a special dress code for the guests for decoration and party invitations.</p>\n\n\n\n<p>You can check the latest ideas online and select the best option for your party. If you already have the party&#8217;s theme in your mind, start applying changes accordingly.</p>\n\n\n\n<h3 class="wp-block-heading">2.&nbsp;&nbsp;&nbsp;&nbsp; Plan a Guest List</h3>\n\n\n\n<p>Planning the guest list is a big task. You need to include all the family and friends with whom you prefer to spend quality time. Gathering the right people for the party is crucial to making it successful. You need to send invitations to all guest lists and ensure you have mentioned the right time, date, and place on the invitation. If you organize the party anywhere else, you must mention the location to avoid any inconvenience.</p>\n\n\n\n<p>Don’t forget to follow up with guests to ensure everyone is coming to your party.</p>\n\n\n\n<h3 class="wp-block-heading">3.&nbsp;&nbsp;&nbsp;&nbsp; Choose the Ideal Venue</h3>\n\n\n\n<p>If you are in Dubai, this place will never make you feel sad while choosing the perfect outdoor location for the parties. There are marvelous places to organize your New Year party with your loved ones. If you have enough space inside your home for the party, invite everyone to enjoy the golden moments. Organizing an outdoor party at your home will be a good option. You can better manage everything without hassle.</p>\n\n\n\n<h3 class="wp-block-heading">4.&nbsp;&nbsp;&nbsp;&nbsp; A Photobooth is Compulsory</h3>\n\n\n\n<p>You need to check the latest <strong>New Year event ideas Dubai</strong> to add these attractive features in your party. Including <strong>New Year Photo booth rental UAE</strong> is an important factor in allowing guests to enjoy a lot and create unforgettable memories. Get ready with props for the family reunion party and set the best backdrop for the photo booth so that they can click amazing photos with each other. These clicked photos can be shared with anyone via email; there is no need to wait long like other event photographs. A Photobooth will give you instant photos that can be shared with anyone without hassle.</p>\n\n\n\n<p>Don’t forget to contact <strong>New Year photo booth rental UAE</strong> to include this amazing option at your private party.</p>\n\n\n\n<h3 class="wp-block-heading">5.&nbsp;&nbsp;&nbsp;&nbsp; Hire a Claw Machine</h3>\n\n\n\n<p>Have you selected a claw machine for the party? To entertain everyone at your <strong>New Year events Dubai</strong>, you must include a <strong>claw machine for New Year events Dubai</strong>. Fill the machine with gifts for everyone and allow your guests to try their luck at grabbing the best gift from the machine. Contact Dubai&#8217;s photo booth rental service provider to get this amazing entertainment option, and you can better distribute gifts among your guests.</p>\n\n\n\n<p>Including the claw machine and a photo booth in private parties has become common. You should add this interesting factor to make your event unforgettable.</p>\n\n\n\n<h3 class="wp-block-heading">6.&nbsp;&nbsp;&nbsp;&nbsp; What Meal to Serve?</h3>\n\n\n\n<p>You must plan for the best meal to be served at your party. Ensure that the drink section is not empty and that a special bar section is managed so your family members can enjoy the party time. You need to arrange for the best catering service for the meal and take care of your guests so they can enjoy the best time with each other.</p>\n\n\n\n<h3 class="wp-block-heading">7.&nbsp;&nbsp;&nbsp;&nbsp; Music and Dance</h3>\n\n\n\n<p>A family reunion party without music and DJ is incomplete. Choose the best DJ for the private party and let everyone dance and rock the floor. Such excitement is for your whole life; your guests will never forget this quality time. It is the best time to close all previous chapters of life to open new chapters for the future.</p>\n\n\n\n<h3 class="wp-block-heading">8.&nbsp;&nbsp;&nbsp;&nbsp; Welcome New Year with Joy</h3>\n\n\n\n<p>Welcome the New Year with complete joy and fun. It is best to say goodbye to all of your worries and welcome the new year with positive thoughts along with your loved ones.</p>\n	35	2024-12-26 02:05:07+00	New Year Party Photo Booth, Family Reunion Party on This New Year's Eve in Dubai	New Year Party Photo Booth rental in Dubia, UAE. Steps to Organize a Family Reunion Party on This New Year's Eve in Dubai.	\N	\N	2025-12-19 07:19:25.442+00	2025-12-19 07:19:25.442+00	draft
12	test sj	test-sj	test sj	test sj	36	2025-12-29 20:00:00+00	test sj	test sj	test-sj	\N	2025-12-30 10:57:05.018+00	2025-12-23 05:52:05.663+00	published
\.


--
-- Data for Name: posts_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.posts_rels (id, "order", parent_id, path, categories_id, tags_id) FROM stdin;
1	1	1	categories	1	\N
2	1	1	tags	\N	1
3	1	2	categories	2	\N
4	1	2	tags	\N	2
5	2	2	tags	\N	3
\.


--
-- Data for Name: settings; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.settings (id, gtm_id, updated_at, created_at) FROM stdin;
\.


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.tags (id, name, slug, updated_at, created_at) FROM stdin;
1	Wedding Planning	wedding-planning	2025-12-19 06:57:29.163+00	2025-12-19 06:57:29.162+00
2	Marketing	marketing	2025-12-19 06:57:30.354+00	2025-12-19 06:57:30.354+00
3	Branding	branding	2025-12-19 06:57:30.625+00	2025-12-19 06:57:30.625+00
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, updated_at, created_at, email, reset_password_token, reset_password_expiration, salt, hash, login_attempts, lock_until) FROM stdin;
2	2025-12-29 12:55:38.265+00	2025-12-29 12:55:38.264+00	shubhneet@iboothme.com	\N	\N	a9e3e8712043b315a23176a650ae5482e86a4b309834f6e92c63f906ae4001b2	a44534d7291cb5353e9fb0416f09ec10974cb37ed59ea045f57a6e2a658201fc26d074a68ef035f861a3ae6dca6a9ccf67a0159af0d6431cb327e6927b3238d671696a34f7ebe5e283aa6688a546c5030fd5f35d20b298308ecbe7a6fe79298e4682ba67da98e7408b6999059c27be95830d07e0dd8cfda8115e478943eed7278f4308f786c5feb32c79f271c22608c51ff8c73b20be9dc61d8824107db12878404494562a46d10e8c9df0357df613e158f0e9e7c12de109481cf0a2590d8ae7e734e2bf10316c67f14f5b74eb89c1fb774f9e76a7f040704dad0c5908a7e8a9c865bdfd0b94e629c4f3b9ba7b15898d3d063a317250f84a88ade0b6a70295c5a277ae262652cf7074f080c5f3fc27f46230a65c8d58aac54a62bcb043bb8a16a3c33697c31b9e02938ce61f3f241c529e8100cdb4e1a40e3e9c5d80f66daf035b874c07199dc9ac557348280d4f3d5650b957f576f9460e05dd6be3f68c23ed887863be7a81574f45a4979899fdf47ef98217f80e9bd060375b3abbeab3364cec410967ff7e960240a0724c37836834d8eabe9acbd00b879f390f5b9ecd51ba312f65777a837ba75e9761f4281e62876e6b9d7d3e79a168542b57e4bc9e0879d02f28dc6c0c81daed3a84eeaf274e88f8b0b6df56eb3ec7ce103c30f6a66819266d6238c5f320f289edc046271464e3f38454f585786c7dd1d8a63c6430073e	0	\N
1	2025-12-29 12:21:47.074+00	2025-12-19 07:01:30.88+00	basel.alaya@gmail.com	f3fb0f28b10fd0ec6c8405200414a35a8592321e	2025-12-25 10:40:35.105+00	fdc2e2e170022a8d3b9c3532650c3124bf8a9206ab704bdb96417a2451a57bfe	cf8d3ecf643a2622a3a08ee3c0ddab58fe26fc95488794987ff4a6f60aefe1faa736c17b2f3213220bee62144ca270720827fdd80656f94b41c25bcf451078b58bb5b6b1495849ff4cc48be96125a087236fbcbeb88135d70e935cda25a9063cf9acc997eaaeab02a227a0aa2de7a6876bea58519db82fdfa74bfe66d8d79e8935c28a85428c46f62cddaf063483cb5661bc87c2a47b85f2439c21ab7257a8cc892a52abe08c3c848efffe49ed6cae116fb9de4022d73193ab1d4051456f051f478f3bd657e65597b519e45f049505ddb869572d0111059b578b891bf6dd2d20d94566e1fc92d026b228ec7425a4c99e10f3b8f1a88fd821673ff954d8648d76cd4e6323e536889c74a3b7c306cc1cb84b6374ccd9c3932118a96ec5063915ca4d225cbeece8ac2b04478378925a6b5b99ce20bb2448b0fc9315fad733f44ae6d6ef6e00654679809f500973e6af1a68995516df8d02d3e621117138ffc3d3cccc6e8f1cd3dd03e01cfd4cbfc21ebbfa23c86f92f07b0546f0afe9841748a40af7cc2ff38cb5409d7347ab02293937809719c1af6a3bafe1d0aed9a364916e65296d491057242fcc6f88a78fa7861647ba287303f9bb52191b5f0fc3e41a5dfcd09dfb727d17a31bf33586562ee5cdfac0b1b6489a4ea23d7c6472e85d90b649aa7933839754c30ea6243400132707231032d90a7f2c2383347db6259474fb93	0	\N
\.


--
-- Data for Name: users_sessions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users_sessions (_order, _parent_id, id, created_at, expires_at) FROM stdin;
1	1	764c5469-d6b8-4b83-97ba-11e13e0565ca	2025-12-30 05:55:41.571+00	2025-12-30 07:55:41.571+00
1	2	f5b910c7-8867-4e83-af59-69265041e520	2025-12-31 05:10:45.531+00	2025-12-31 07:10:45.531+00
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: realtime; Owner: -
--

COPY realtime.schema_migrations (version, inserted_at) FROM stdin;
20211116024918	2025-12-19 04:14:17
20211116045059	2025-12-19 04:14:18
20211116050929	2025-12-19 04:14:19
20211116051442	2025-12-19 04:14:19
20211116212300	2025-12-19 04:14:20
20211116213355	2025-12-19 04:14:20
20211116213934	2025-12-19 04:14:21
20211116214523	2025-12-19 04:14:22
20211122062447	2025-12-19 04:14:23
20211124070109	2025-12-19 04:14:23
20211202204204	2025-12-19 04:14:24
20211202204605	2025-12-19 04:14:24
20211210212804	2025-12-19 04:14:26
20211228014915	2025-12-19 04:14:27
20220107221237	2025-12-19 04:14:28
20220228202821	2025-12-19 04:14:28
20220312004840	2025-12-19 04:14:29
20220603231003	2025-12-19 04:14:30
20220603232444	2025-12-19 04:14:30
20220615214548	2025-12-19 04:14:31
20220712093339	2025-12-19 04:14:32
20220908172859	2025-12-19 04:14:32
20220916233421	2025-12-19 04:14:33
20230119133233	2025-12-19 04:14:34
20230128025114	2025-12-19 04:14:34
20230128025212	2025-12-19 04:14:35
20230227211149	2025-12-19 04:14:36
20230228184745	2025-12-19 04:14:36
20230308225145	2025-12-19 04:14:37
20230328144023	2025-12-19 04:14:38
20231018144023	2025-12-19 04:14:38
20231204144023	2025-12-19 04:14:39
20231204144024	2025-12-19 04:14:40
20231204144025	2025-12-19 04:14:40
20240108234812	2025-12-19 04:14:41
20240109165339	2025-12-19 04:14:42
20240227174441	2025-12-19 04:14:43
20240311171622	2025-12-19 04:14:44
20240321100241	2025-12-19 04:14:45
20240401105812	2025-12-19 04:14:47
20240418121054	2025-12-19 04:14:48
20240523004032	2025-12-19 04:14:50
20240618124746	2025-12-19 04:14:50
20240801235015	2025-12-19 04:14:51
20240805133720	2025-12-19 04:14:52
20240827160934	2025-12-19 04:14:52
20240919163303	2025-12-19 04:14:53
20240919163305	2025-12-19 04:14:54
20241019105805	2025-12-19 04:14:54
20241030150047	2025-12-19 04:14:57
20241108114728	2025-12-19 04:14:57
20241121104152	2025-12-19 04:14:58
20241130184212	2025-12-19 04:14:59
20241220035512	2025-12-19 04:14:59
20241220123912	2025-12-19 04:15:00
20241224161212	2025-12-19 04:15:01
20250107150512	2025-12-19 04:15:01
20250110162412	2025-12-19 04:15:02
20250123174212	2025-12-19 04:15:02
20250128220012	2025-12-19 04:15:03
20250506224012	2025-12-19 04:15:04
20250523164012	2025-12-19 04:15:04
20250714121412	2025-12-19 04:15:05
20250905041441	2025-12-19 04:15:05
20251103001201	2025-12-19 04:15:06
\.


--
-- Data for Name: subscription; Type: TABLE DATA; Schema: realtime; Owner: -
--

COPY realtime.subscription (id, subscription_id, entity, filters, claims, created_at) FROM stdin;
\.


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: -
--

COPY storage.buckets (id, name, owner, created_at, updated_at, public, avif_autodetection, file_size_limit, allowed_mime_types, owner_id, type) FROM stdin;
\.


--
-- Data for Name: buckets_analytics; Type: TABLE DATA; Schema: storage; Owner: -
--

COPY storage.buckets_analytics (name, type, format, created_at, updated_at, id, deleted_at) FROM stdin;
\.


--
-- Data for Name: buckets_vectors; Type: TABLE DATA; Schema: storage; Owner: -
--

COPY storage.buckets_vectors (id, type, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: storage; Owner: -
--

COPY storage.migrations (id, name, hash, executed_at) FROM stdin;
0	create-migrations-table	e18db593bcde2aca2a408c4d1100f6abba2195df	2025-12-19 04:14:16.611262
1	initialmigration	6ab16121fbaa08bbd11b712d05f358f9b555d777	2025-12-19 04:14:16.623787
2	storage-schema	5c7968fd083fcea04050c1b7f6253c9771b99011	2025-12-19 04:14:16.628945
3	pathtoken-column	2cb1b0004b817b29d5b0a971af16bafeede4b70d	2025-12-19 04:14:16.653983
4	add-migrations-rls	427c5b63fe1c5937495d9c635c263ee7a5905058	2025-12-19 04:14:16.695947
5	add-size-functions	79e081a1455b63666c1294a440f8ad4b1e6a7f84	2025-12-19 04:14:16.701614
6	change-column-name-in-get-size	f93f62afdf6613ee5e7e815b30d02dc990201044	2025-12-19 04:14:16.707744
7	add-rls-to-buckets	e7e7f86adbc51049f341dfe8d30256c1abca17aa	2025-12-19 04:14:16.713374
8	add-public-to-buckets	fd670db39ed65f9d08b01db09d6202503ca2bab3	2025-12-19 04:14:16.718676
9	fix-search-function	3a0af29f42e35a4d101c259ed955b67e1bee6825	2025-12-19 04:14:16.724108
10	search-files-search-function	68dc14822daad0ffac3746a502234f486182ef6e	2025-12-19 04:14:16.730541
11	add-trigger-to-auto-update-updated_at-column	7425bdb14366d1739fa8a18c83100636d74dcaa2	2025-12-19 04:14:16.736535
12	add-automatic-avif-detection-flag	8e92e1266eb29518b6a4c5313ab8f29dd0d08df9	2025-12-19 04:14:16.742492
13	add-bucket-custom-limits	cce962054138135cd9a8c4bcd531598684b25e7d	2025-12-19 04:14:16.749476
14	use-bytes-for-max-size	941c41b346f9802b411f06f30e972ad4744dad27	2025-12-19 04:14:16.756363
15	add-can-insert-object-function	934146bc38ead475f4ef4b555c524ee5d66799e5	2025-12-19 04:14:16.780283
16	add-version	76debf38d3fd07dcfc747ca49096457d95b1221b	2025-12-19 04:14:16.78607
17	drop-owner-foreign-key	f1cbb288f1b7a4c1eb8c38504b80ae2a0153d101	2025-12-19 04:14:16.791372
18	add_owner_id_column_deprecate_owner	e7a511b379110b08e2f214be852c35414749fe66	2025-12-19 04:14:16.7966
19	alter-default-value-objects-id	02e5e22a78626187e00d173dc45f58fa66a4f043	2025-12-19 04:14:16.802988
20	list-objects-with-delimiter	cd694ae708e51ba82bf012bba00caf4f3b6393b7	2025-12-19 04:14:16.8089
21	s3-multipart-uploads	8c804d4a566c40cd1e4cc5b3725a664a9303657f	2025-12-19 04:14:16.816351
22	s3-multipart-uploads-big-ints	9737dc258d2397953c9953d9b86920b8be0cdb73	2025-12-19 04:14:16.831071
23	optimize-search-function	9d7e604cddc4b56a5422dc68c9313f4a1b6f132c	2025-12-19 04:14:16.84167
24	operation-function	8312e37c2bf9e76bbe841aa5fda889206d2bf8aa	2025-12-19 04:14:16.847264
25	custom-metadata	d974c6057c3db1c1f847afa0e291e6165693b990	2025-12-19 04:14:16.85271
26	objects-prefixes	ef3f7871121cdc47a65308e6702519e853422ae2	2025-12-19 04:14:16.858217
27	search-v2	33b8f2a7ae53105f028e13e9fcda9dc4f356b4a2	2025-12-19 04:14:16.87014
28	object-bucket-name-sorting	ba85ec41b62c6a30a3f136788227ee47f311c436	2025-12-19 04:14:17.63605
29	create-prefixes	a7b1a22c0dc3ab630e3055bfec7ce7d2045c5b7b	2025-12-19 04:14:17.642294
30	update-object-levels	6c6f6cc9430d570f26284a24cf7b210599032db7	2025-12-19 04:14:17.649044
31	objects-level-index	33f1fef7ec7fea08bb892222f4f0f5d79bab5eb8	2025-12-19 04:14:17.765215
32	backward-compatible-index-on-objects	2d51eeb437a96868b36fcdfb1ddefdf13bef1647	2025-12-19 04:14:17.772831
33	backward-compatible-index-on-prefixes	fe473390e1b8c407434c0e470655945b110507bf	2025-12-19 04:14:17.780583
34	optimize-search-function-v1	82b0e469a00e8ebce495e29bfa70a0797f7ebd2c	2025-12-19 04:14:17.782676
35	add-insert-trigger-prefixes	63bb9fd05deb3dc5e9fa66c83e82b152f0caf589	2025-12-19 04:14:17.789189
36	optimise-existing-functions	81cf92eb0c36612865a18016a38496c530443899	2025-12-19 04:14:17.794589
37	add-bucket-name-length-trigger	3944135b4e3e8b22d6d4cbb568fe3b0b51df15c1	2025-12-19 04:14:17.802899
38	iceberg-catalog-flag-on-buckets	19a8bd89d5dfa69af7f222a46c726b7c41e462c5	2025-12-19 04:14:17.809037
39	add-search-v2-sort-support	39cf7d1e6bf515f4b02e41237aba845a7b492853	2025-12-19 04:14:17.819971
40	fix-prefix-race-conditions-optimized	fd02297e1c67df25a9fc110bf8c8a9af7fb06d1f	2025-12-19 04:14:17.826005
41	add-object-level-update-trigger	44c22478bf01744b2129efc480cd2edc9a7d60e9	2025-12-19 04:14:17.835173
42	rollback-prefix-triggers	f2ab4f526ab7f979541082992593938c05ee4b47	2025-12-19 04:14:17.841895
43	fix-object-level	ab837ad8f1c7d00cc0b7310e989a23388ff29fc6	2025-12-19 04:14:17.848906
44	vector-bucket-type	99c20c0ffd52bb1ff1f32fb992f3b351e3ef8fb3	2025-12-19 04:14:17.854651
45	vector-buckets	049e27196d77a7cb76497a85afae669d8b230953	2025-12-19 04:14:17.860095
46	buckets-objects-grants	fedeb96d60fefd8e02ab3ded9fbde05632f84aed	2025-12-19 04:14:17.870862
47	iceberg-table-metadata	649df56855c24d8b36dd4cc1aeb8251aa9ad42c2	2025-12-19 04:14:17.87703
48	iceberg-catalog-ids	2666dff93346e5d04e0a878416be1d5fec345d6f	2025-12-19 04:14:17.881959
49	buckets-objects-grants-postgres	072b1195d0d5a2f888af6b2302a1938dd94b8b3d	2025-12-22 11:23:35.019856
\.


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: -
--

COPY storage.objects (id, bucket_id, name, owner, created_at, updated_at, last_accessed_at, metadata, version, owner_id, user_metadata, level) FROM stdin;
\.


--
-- Data for Name: prefixes; Type: TABLE DATA; Schema: storage; Owner: -
--

COPY storage.prefixes (bucket_id, name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: -
--

COPY storage.s3_multipart_uploads (id, in_progress_size, upload_signature, bucket_id, key, version, owner_id, created_at, user_metadata) FROM stdin;
\.


--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: -
--

COPY storage.s3_multipart_uploads_parts (id, upload_id, size, part_number, bucket_id, key, etag, owner_id, version, created_at) FROM stdin;
\.


--
-- Data for Name: vector_indexes; Type: TABLE DATA; Schema: storage; Owner: -
--

COPY storage.vector_indexes (id, name, bucket_id, data_type, dimension, distance_metric, metadata_configuration, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: -
--

COPY vault.secrets (id, name, description, secret, key_id, nonce, created_at, updated_at) FROM stdin;
\.


--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: -
--

SELECT pg_catalog.setval('auth.refresh_tokens_id_seq', 1, false);


--
-- Name: _posts_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public._posts_v_id_seq', 13, true);


--
-- Name: _posts_v_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public._posts_v_rels_id_seq', 5, true);


--
-- Name: booths_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.booths_id_seq', 9, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.categories_id_seq', 2, true);


--
-- Name: concepts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.concepts_id_seq', 7, true);


--
-- Name: gallery_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.gallery_id_seq', 37, true);


--
-- Name: leads_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.leads_id_seq', 36, true);


--
-- Name: media_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.media_id_seq', 41, true);


--
-- Name: payload_kv_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.payload_kv_id_seq', 1, false);


--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.payload_locked_documents_id_seq', 28, true);


--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.payload_locked_documents_rels_id_seq', 56, true);


--
-- Name: payload_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.payload_migrations_id_seq', 1, true);


--
-- Name: payload_preferences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.payload_preferences_id_seq', 20, true);


--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.payload_preferences_rels_id_seq', 37, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.posts_id_seq', 12, true);


--
-- Name: posts_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.posts_rels_id_seq', 5, true);


--
-- Name: settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.settings_id_seq', 1, false);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tags_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: subscription_id_seq; Type: SEQUENCE SET; Schema: realtime; Owner: -
--

SELECT pg_catalog.setval('realtime.subscription_id_seq', 1, false);


--
-- Name: mfa_amr_claims amr_id_pk; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_amr_claims
    ADD CONSTRAINT amr_id_pk PRIMARY KEY (id);


--
-- Name: audit_log_entries audit_log_entries_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.audit_log_entries
    ADD CONSTRAINT audit_log_entries_pkey PRIMARY KEY (id);


--
-- Name: flow_state flow_state_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.flow_state
    ADD CONSTRAINT flow_state_pkey PRIMARY KEY (id);


--
-- Name: identities identities_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.identities
    ADD CONSTRAINT identities_pkey PRIMARY KEY (id);


--
-- Name: identities identities_provider_id_provider_unique; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.identities
    ADD CONSTRAINT identities_provider_id_provider_unique UNIQUE (provider_id, provider);


--
-- Name: instances instances_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.instances
    ADD CONSTRAINT instances_pkey PRIMARY KEY (id);


--
-- Name: mfa_amr_claims mfa_amr_claims_session_id_authentication_method_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_amr_claims
    ADD CONSTRAINT mfa_amr_claims_session_id_authentication_method_pkey UNIQUE (session_id, authentication_method);


--
-- Name: mfa_challenges mfa_challenges_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_challenges
    ADD CONSTRAINT mfa_challenges_pkey PRIMARY KEY (id);


--
-- Name: mfa_factors mfa_factors_last_challenged_at_key; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_factors
    ADD CONSTRAINT mfa_factors_last_challenged_at_key UNIQUE (last_challenged_at);


--
-- Name: mfa_factors mfa_factors_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_factors
    ADD CONSTRAINT mfa_factors_pkey PRIMARY KEY (id);


--
-- Name: oauth_authorizations oauth_authorizations_authorization_code_key; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_authorizations
    ADD CONSTRAINT oauth_authorizations_authorization_code_key UNIQUE (authorization_code);


--
-- Name: oauth_authorizations oauth_authorizations_authorization_id_key; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_authorizations
    ADD CONSTRAINT oauth_authorizations_authorization_id_key UNIQUE (authorization_id);


--
-- Name: oauth_authorizations oauth_authorizations_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_authorizations
    ADD CONSTRAINT oauth_authorizations_pkey PRIMARY KEY (id);


--
-- Name: oauth_client_states oauth_client_states_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_client_states
    ADD CONSTRAINT oauth_client_states_pkey PRIMARY KEY (id);


--
-- Name: oauth_clients oauth_clients_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_clients
    ADD CONSTRAINT oauth_clients_pkey PRIMARY KEY (id);


--
-- Name: oauth_consents oauth_consents_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_consents
    ADD CONSTRAINT oauth_consents_pkey PRIMARY KEY (id);


--
-- Name: oauth_consents oauth_consents_user_client_unique; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_consents
    ADD CONSTRAINT oauth_consents_user_client_unique UNIQUE (user_id, client_id);


--
-- Name: one_time_tokens one_time_tokens_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.one_time_tokens
    ADD CONSTRAINT one_time_tokens_pkey PRIMARY KEY (id);


--
-- Name: refresh_tokens refresh_tokens_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.refresh_tokens
    ADD CONSTRAINT refresh_tokens_pkey PRIMARY KEY (id);


--
-- Name: refresh_tokens refresh_tokens_token_unique; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.refresh_tokens
    ADD CONSTRAINT refresh_tokens_token_unique UNIQUE (token);


--
-- Name: saml_providers saml_providers_entity_id_key; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_providers
    ADD CONSTRAINT saml_providers_entity_id_key UNIQUE (entity_id);


--
-- Name: saml_providers saml_providers_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_providers
    ADD CONSTRAINT saml_providers_pkey PRIMARY KEY (id);


--
-- Name: saml_relay_states saml_relay_states_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_relay_states
    ADD CONSTRAINT saml_relay_states_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sso_domains sso_domains_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sso_domains
    ADD CONSTRAINT sso_domains_pkey PRIMARY KEY (id);


--
-- Name: sso_providers sso_providers_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sso_providers
    ADD CONSTRAINT sso_providers_pkey PRIMARY KEY (id);


--
-- Name: users users_phone_key; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.users
    ADD CONSTRAINT users_phone_key UNIQUE (phone);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: _posts_v _posts_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._posts_v
    ADD CONSTRAINT _posts_v_pkey PRIMARY KEY (id);


--
-- Name: _posts_v_rels _posts_v_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._posts_v_rels
    ADD CONSTRAINT _posts_v_rels_pkey PRIMARY KEY (id);


--
-- Name: booths_faqs booths_faqs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.booths_faqs
    ADD CONSTRAINT booths_faqs_pkey PRIMARY KEY (id);


--
-- Name: booths_features booths_features_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.booths_features
    ADD CONSTRAINT booths_features_pkey PRIMARY KEY (id);


--
-- Name: booths_gallery_images booths_gallery_images_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.booths_gallery_images
    ADD CONSTRAINT booths_gallery_images_pkey PRIMARY KEY (id);


--
-- Name: booths booths_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.booths
    ADD CONSTRAINT booths_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: concepts concepts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.concepts
    ADD CONSTRAINT concepts_pkey PRIMARY KEY (id);


--
-- Name: gallery gallery_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gallery
    ADD CONSTRAINT gallery_pkey PRIMARY KEY (id);


--
-- Name: leads leads_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.leads
    ADD CONSTRAINT leads_pkey PRIMARY KEY (id);


--
-- Name: media media_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.media
    ADD CONSTRAINT media_pkey PRIMARY KEY (id);


--
-- Name: payload_kv payload_kv_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_kv
    ADD CONSTRAINT payload_kv_pkey PRIMARY KEY (id);


--
-- Name: payload_locked_documents payload_locked_documents_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents
    ADD CONSTRAINT payload_locked_documents_pkey PRIMARY KEY (id);


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_pkey PRIMARY KEY (id);


--
-- Name: payload_migrations payload_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_migrations
    ADD CONSTRAINT payload_migrations_pkey PRIMARY KEY (id);


--
-- Name: payload_preferences payload_preferences_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_preferences
    ADD CONSTRAINT payload_preferences_pkey PRIMARY KEY (id);


--
-- Name: payload_preferences_rels payload_preferences_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_preferences_rels
    ADD CONSTRAINT payload_preferences_rels_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: posts_rels posts_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts_rels
    ADD CONSTRAINT posts_rels_pkey PRIMARY KEY (id);


--
-- Name: settings settings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.settings
    ADD CONSTRAINT settings_pkey PRIMARY KEY (id);


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users_sessions users_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_sessions
    ADD CONSTRAINT users_sessions_pkey PRIMARY KEY (id);


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id, inserted_at);


--
-- Name: subscription pk_subscription; Type: CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.subscription
    ADD CONSTRAINT pk_subscription PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: buckets_analytics buckets_analytics_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.buckets_analytics
    ADD CONSTRAINT buckets_analytics_pkey PRIMARY KEY (id);


--
-- Name: buckets buckets_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.buckets
    ADD CONSTRAINT buckets_pkey PRIMARY KEY (id);


--
-- Name: buckets_vectors buckets_vectors_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.buckets_vectors
    ADD CONSTRAINT buckets_vectors_pkey PRIMARY KEY (id);


--
-- Name: migrations migrations_name_key; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.migrations
    ADD CONSTRAINT migrations_name_key UNIQUE (name);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: objects objects_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.objects
    ADD CONSTRAINT objects_pkey PRIMARY KEY (id);


--
-- Name: prefixes prefixes_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.prefixes
    ADD CONSTRAINT prefixes_pkey PRIMARY KEY (bucket_id, level, name);


--
-- Name: s3_multipart_uploads_parts s3_multipart_uploads_parts_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.s3_multipart_uploads_parts
    ADD CONSTRAINT s3_multipart_uploads_parts_pkey PRIMARY KEY (id);


--
-- Name: s3_multipart_uploads s3_multipart_uploads_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.s3_multipart_uploads
    ADD CONSTRAINT s3_multipart_uploads_pkey PRIMARY KEY (id);


--
-- Name: vector_indexes vector_indexes_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.vector_indexes
    ADD CONSTRAINT vector_indexes_pkey PRIMARY KEY (id);


--
-- Name: audit_logs_instance_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX audit_logs_instance_id_idx ON auth.audit_log_entries USING btree (instance_id);


--
-- Name: confirmation_token_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX confirmation_token_idx ON auth.users USING btree (confirmation_token) WHERE ((confirmation_token)::text !~ '^[0-9 ]*$'::text);


--
-- Name: email_change_token_current_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX email_change_token_current_idx ON auth.users USING btree (email_change_token_current) WHERE ((email_change_token_current)::text !~ '^[0-9 ]*$'::text);


--
-- Name: email_change_token_new_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX email_change_token_new_idx ON auth.users USING btree (email_change_token_new) WHERE ((email_change_token_new)::text !~ '^[0-9 ]*$'::text);


--
-- Name: factor_id_created_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX factor_id_created_at_idx ON auth.mfa_factors USING btree (user_id, created_at);


--
-- Name: flow_state_created_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX flow_state_created_at_idx ON auth.flow_state USING btree (created_at DESC);


--
-- Name: identities_email_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX identities_email_idx ON auth.identities USING btree (email text_pattern_ops);


--
-- Name: INDEX identities_email_idx; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON INDEX auth.identities_email_idx IS 'Auth: Ensures indexed queries on the email column';


--
-- Name: identities_user_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX identities_user_id_idx ON auth.identities USING btree (user_id);


--
-- Name: idx_auth_code; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX idx_auth_code ON auth.flow_state USING btree (auth_code);


--
-- Name: idx_oauth_client_states_created_at; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX idx_oauth_client_states_created_at ON auth.oauth_client_states USING btree (created_at);


--
-- Name: idx_user_id_auth_method; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX idx_user_id_auth_method ON auth.flow_state USING btree (user_id, authentication_method);


--
-- Name: mfa_challenge_created_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX mfa_challenge_created_at_idx ON auth.mfa_challenges USING btree (created_at DESC);


--
-- Name: mfa_factors_user_friendly_name_unique; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX mfa_factors_user_friendly_name_unique ON auth.mfa_factors USING btree (friendly_name, user_id) WHERE (TRIM(BOTH FROM friendly_name) <> ''::text);


--
-- Name: mfa_factors_user_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX mfa_factors_user_id_idx ON auth.mfa_factors USING btree (user_id);


--
-- Name: oauth_auth_pending_exp_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX oauth_auth_pending_exp_idx ON auth.oauth_authorizations USING btree (expires_at) WHERE (status = 'pending'::auth.oauth_authorization_status);


--
-- Name: oauth_clients_deleted_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX oauth_clients_deleted_at_idx ON auth.oauth_clients USING btree (deleted_at);


--
-- Name: oauth_consents_active_client_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX oauth_consents_active_client_idx ON auth.oauth_consents USING btree (client_id) WHERE (revoked_at IS NULL);


--
-- Name: oauth_consents_active_user_client_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX oauth_consents_active_user_client_idx ON auth.oauth_consents USING btree (user_id, client_id) WHERE (revoked_at IS NULL);


--
-- Name: oauth_consents_user_order_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX oauth_consents_user_order_idx ON auth.oauth_consents USING btree (user_id, granted_at DESC);


--
-- Name: one_time_tokens_relates_to_hash_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX one_time_tokens_relates_to_hash_idx ON auth.one_time_tokens USING hash (relates_to);


--
-- Name: one_time_tokens_token_hash_hash_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX one_time_tokens_token_hash_hash_idx ON auth.one_time_tokens USING hash (token_hash);


--
-- Name: one_time_tokens_user_id_token_type_key; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX one_time_tokens_user_id_token_type_key ON auth.one_time_tokens USING btree (user_id, token_type);


--
-- Name: reauthentication_token_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX reauthentication_token_idx ON auth.users USING btree (reauthentication_token) WHERE ((reauthentication_token)::text !~ '^[0-9 ]*$'::text);


--
-- Name: recovery_token_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX recovery_token_idx ON auth.users USING btree (recovery_token) WHERE ((recovery_token)::text !~ '^[0-9 ]*$'::text);


--
-- Name: refresh_tokens_instance_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX refresh_tokens_instance_id_idx ON auth.refresh_tokens USING btree (instance_id);


--
-- Name: refresh_tokens_instance_id_user_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX refresh_tokens_instance_id_user_id_idx ON auth.refresh_tokens USING btree (instance_id, user_id);


--
-- Name: refresh_tokens_parent_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX refresh_tokens_parent_idx ON auth.refresh_tokens USING btree (parent);


--
-- Name: refresh_tokens_session_id_revoked_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX refresh_tokens_session_id_revoked_idx ON auth.refresh_tokens USING btree (session_id, revoked);


--
-- Name: refresh_tokens_updated_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX refresh_tokens_updated_at_idx ON auth.refresh_tokens USING btree (updated_at DESC);


--
-- Name: saml_providers_sso_provider_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX saml_providers_sso_provider_id_idx ON auth.saml_providers USING btree (sso_provider_id);


--
-- Name: saml_relay_states_created_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX saml_relay_states_created_at_idx ON auth.saml_relay_states USING btree (created_at DESC);


--
-- Name: saml_relay_states_for_email_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX saml_relay_states_for_email_idx ON auth.saml_relay_states USING btree (for_email);


--
-- Name: saml_relay_states_sso_provider_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX saml_relay_states_sso_provider_id_idx ON auth.saml_relay_states USING btree (sso_provider_id);


--
-- Name: sessions_not_after_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX sessions_not_after_idx ON auth.sessions USING btree (not_after DESC);


--
-- Name: sessions_oauth_client_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX sessions_oauth_client_id_idx ON auth.sessions USING btree (oauth_client_id);


--
-- Name: sessions_user_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX sessions_user_id_idx ON auth.sessions USING btree (user_id);


--
-- Name: sso_domains_domain_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX sso_domains_domain_idx ON auth.sso_domains USING btree (lower(domain));


--
-- Name: sso_domains_sso_provider_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX sso_domains_sso_provider_id_idx ON auth.sso_domains USING btree (sso_provider_id);


--
-- Name: sso_providers_resource_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX sso_providers_resource_id_idx ON auth.sso_providers USING btree (lower(resource_id));


--
-- Name: sso_providers_resource_id_pattern_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX sso_providers_resource_id_pattern_idx ON auth.sso_providers USING btree (resource_id text_pattern_ops);


--
-- Name: unique_phone_factor_per_user; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX unique_phone_factor_per_user ON auth.mfa_factors USING btree (user_id, phone);


--
-- Name: user_id_created_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX user_id_created_at_idx ON auth.sessions USING btree (user_id, created_at);


--
-- Name: users_email_partial_key; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX users_email_partial_key ON auth.users USING btree (email) WHERE (is_sso_user = false);


--
-- Name: INDEX users_email_partial_key; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON INDEX auth.users_email_partial_key IS 'Auth: A partial unique index that applies only when is_sso_user is false';


--
-- Name: users_instance_id_email_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX users_instance_id_email_idx ON auth.users USING btree (instance_id, lower((email)::text));


--
-- Name: users_instance_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX users_instance_id_idx ON auth.users USING btree (instance_id);


--
-- Name: users_is_anonymous_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX users_is_anonymous_idx ON auth.users USING btree (is_anonymous);


--
-- Name: _posts_v_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _posts_v_created_at_idx ON public._posts_v USING btree (created_at);


--
-- Name: _posts_v_latest_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _posts_v_latest_idx ON public._posts_v USING btree (latest);


--
-- Name: _posts_v_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _posts_v_parent_idx ON public._posts_v USING btree (parent_id);


--
-- Name: _posts_v_rels_categories_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _posts_v_rels_categories_id_idx ON public._posts_v_rels USING btree (categories_id);


--
-- Name: _posts_v_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _posts_v_rels_order_idx ON public._posts_v_rels USING btree ("order");


--
-- Name: _posts_v_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _posts_v_rels_parent_idx ON public._posts_v_rels USING btree (parent_id);


--
-- Name: _posts_v_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _posts_v_rels_path_idx ON public._posts_v_rels USING btree (path);


--
-- Name: _posts_v_rels_tags_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _posts_v_rels_tags_id_idx ON public._posts_v_rels USING btree (tags_id);


--
-- Name: _posts_v_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _posts_v_updated_at_idx ON public._posts_v USING btree (updated_at);


--
-- Name: _posts_v_version_version__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _posts_v_version_version__status_idx ON public._posts_v USING btree (version__status);


--
-- Name: _posts_v_version_version_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _posts_v_version_version_created_at_idx ON public._posts_v USING btree (version_created_at);


--
-- Name: _posts_v_version_version_featured_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _posts_v_version_version_featured_image_idx ON public._posts_v USING btree (version_featured_image_id);


--
-- Name: _posts_v_version_version_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _posts_v_version_version_slug_idx ON public._posts_v USING btree (version_slug);


--
-- Name: _posts_v_version_version_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX _posts_v_version_version_updated_at_idx ON public._posts_v USING btree (version_updated_at);


--
-- Name: booths_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX booths_created_at_idx ON public.booths USING btree (created_at);


--
-- Name: booths_faqs_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX booths_faqs_order_idx ON public.booths_faqs USING btree (_order);


--
-- Name: booths_faqs_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX booths_faqs_parent_id_idx ON public.booths_faqs USING btree (_parent_id);


--
-- Name: booths_features_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX booths_features_order_idx ON public.booths_features USING btree (_order);


--
-- Name: booths_features_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX booths_features_parent_id_idx ON public.booths_features USING btree (_parent_id);


--
-- Name: booths_gallery_images_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX booths_gallery_images_image_idx ON public.booths_gallery_images USING btree (image_id);


--
-- Name: booths_gallery_images_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX booths_gallery_images_order_idx ON public.booths_gallery_images USING btree (_order);


--
-- Name: booths_gallery_images_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX booths_gallery_images_parent_id_idx ON public.booths_gallery_images USING btree (_parent_id);


--
-- Name: booths_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX booths_slug_idx ON public.booths USING btree (slug);


--
-- Name: booths_thumbnail_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX booths_thumbnail_image_idx ON public.booths USING btree (thumbnail_image_id);


--
-- Name: booths_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX booths_updated_at_idx ON public.booths USING btree (updated_at);


--
-- Name: categories_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX categories_created_at_idx ON public.categories USING btree (created_at);


--
-- Name: categories_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX categories_slug_idx ON public.categories USING btree (slug);


--
-- Name: categories_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX categories_updated_at_idx ON public.categories USING btree (updated_at);


--
-- Name: concepts_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX concepts_created_at_idx ON public.concepts USING btree (created_at);


--
-- Name: concepts_seo_seo_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX concepts_seo_seo_image_idx ON public.concepts USING btree (seo_image_id);


--
-- Name: concepts_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX concepts_slug_idx ON public.concepts USING btree (slug);


--
-- Name: concepts_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX concepts_updated_at_idx ON public.concepts USING btree (updated_at);


--
-- Name: gallery_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX gallery_created_at_idx ON public.gallery USING btree (created_at);


--
-- Name: gallery_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX gallery_image_idx ON public.gallery USING btree (image_id);


--
-- Name: gallery_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX gallery_updated_at_idx ON public.gallery USING btree (updated_at);


--
-- Name: leads_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX leads_created_at_idx ON public.leads USING btree (created_at);


--
-- Name: leads_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX leads_updated_at_idx ON public.leads USING btree (updated_at);


--
-- Name: media_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX media_created_at_idx ON public.media USING btree (created_at);


--
-- Name: media_filename_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX media_filename_idx ON public.media USING btree (filename);


--
-- Name: media_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX media_updated_at_idx ON public.media USING btree (updated_at);


--
-- Name: payload_kv_key_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX payload_kv_key_idx ON public.payload_kv USING btree (key);


--
-- Name: payload_locked_documents_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_created_at_idx ON public.payload_locked_documents USING btree (created_at);


--
-- Name: payload_locked_documents_global_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_global_slug_idx ON public.payload_locked_documents USING btree (global_slug);


--
-- Name: payload_locked_documents_rels_booths_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_booths_id_idx ON public.payload_locked_documents_rels USING btree (booths_id);


--
-- Name: payload_locked_documents_rels_categories_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_categories_id_idx ON public.payload_locked_documents_rels USING btree (categories_id);


--
-- Name: payload_locked_documents_rels_concepts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_concepts_id_idx ON public.payload_locked_documents_rels USING btree (concepts_id);


--
-- Name: payload_locked_documents_rels_gallery_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_gallery_id_idx ON public.payload_locked_documents_rels USING btree (gallery_id);


--
-- Name: payload_locked_documents_rels_leads_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_leads_id_idx ON public.payload_locked_documents_rels USING btree (leads_id);


--
-- Name: payload_locked_documents_rels_media_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_media_id_idx ON public.payload_locked_documents_rels USING btree (media_id);


--
-- Name: payload_locked_documents_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_order_idx ON public.payload_locked_documents_rels USING btree ("order");


--
-- Name: payload_locked_documents_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_parent_idx ON public.payload_locked_documents_rels USING btree (parent_id);


--
-- Name: payload_locked_documents_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_path_idx ON public.payload_locked_documents_rels USING btree (path);


--
-- Name: payload_locked_documents_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_posts_id_idx ON public.payload_locked_documents_rels USING btree (posts_id);


--
-- Name: payload_locked_documents_rels_tags_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_tags_id_idx ON public.payload_locked_documents_rels USING btree (tags_id);


--
-- Name: payload_locked_documents_rels_users_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_rels_users_id_idx ON public.payload_locked_documents_rels USING btree (users_id);


--
-- Name: payload_locked_documents_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_locked_documents_updated_at_idx ON public.payload_locked_documents USING btree (updated_at);


--
-- Name: payload_migrations_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_migrations_created_at_idx ON public.payload_migrations USING btree (created_at);


--
-- Name: payload_migrations_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_migrations_updated_at_idx ON public.payload_migrations USING btree (updated_at);


--
-- Name: payload_preferences_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_preferences_created_at_idx ON public.payload_preferences USING btree (created_at);


--
-- Name: payload_preferences_key_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_preferences_key_idx ON public.payload_preferences USING btree (key);


--
-- Name: payload_preferences_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_preferences_rels_order_idx ON public.payload_preferences_rels USING btree ("order");


--
-- Name: payload_preferences_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_preferences_rels_parent_idx ON public.payload_preferences_rels USING btree (parent_id);


--
-- Name: payload_preferences_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_preferences_rels_path_idx ON public.payload_preferences_rels USING btree (path);


--
-- Name: payload_preferences_rels_users_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_preferences_rels_users_id_idx ON public.payload_preferences_rels USING btree (users_id);


--
-- Name: payload_preferences_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX payload_preferences_updated_at_idx ON public.payload_preferences USING btree (updated_at);


--
-- Name: posts__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX posts__status_idx ON public.posts USING btree (_status);


--
-- Name: posts_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX posts_created_at_idx ON public.posts USING btree (created_at);


--
-- Name: posts_featured_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX posts_featured_image_idx ON public.posts USING btree (featured_image_id);


--
-- Name: posts_rels_categories_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX posts_rels_categories_id_idx ON public.posts_rels USING btree (categories_id);


--
-- Name: posts_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX posts_rels_order_idx ON public.posts_rels USING btree ("order");


--
-- Name: posts_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX posts_rels_parent_idx ON public.posts_rels USING btree (parent_id);


--
-- Name: posts_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX posts_rels_path_idx ON public.posts_rels USING btree (path);


--
-- Name: posts_rels_tags_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX posts_rels_tags_id_idx ON public.posts_rels USING btree (tags_id);


--
-- Name: posts_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX posts_slug_idx ON public.posts USING btree (slug);


--
-- Name: posts_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX posts_updated_at_idx ON public.posts USING btree (updated_at);


--
-- Name: tags_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX tags_created_at_idx ON public.tags USING btree (created_at);


--
-- Name: tags_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX tags_slug_idx ON public.tags USING btree (slug);


--
-- Name: tags_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX tags_updated_at_idx ON public.tags USING btree (updated_at);


--
-- Name: users_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX users_created_at_idx ON public.users USING btree (created_at);


--
-- Name: users_email_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX users_email_idx ON public.users USING btree (email);


--
-- Name: users_sessions_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX users_sessions_order_idx ON public.users_sessions USING btree (_order);


--
-- Name: users_sessions_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX users_sessions_parent_id_idx ON public.users_sessions USING btree (_parent_id);


--
-- Name: users_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX users_updated_at_idx ON public.users USING btree (updated_at);


--
-- Name: ix_realtime_subscription_entity; Type: INDEX; Schema: realtime; Owner: -
--

CREATE INDEX ix_realtime_subscription_entity ON realtime.subscription USING btree (entity);


--
-- Name: messages_inserted_at_topic_index; Type: INDEX; Schema: realtime; Owner: -
--

CREATE INDEX messages_inserted_at_topic_index ON ONLY realtime.messages USING btree (inserted_at DESC, topic) WHERE ((extension = 'broadcast'::text) AND (private IS TRUE));


--
-- Name: subscription_subscription_id_entity_filters_key; Type: INDEX; Schema: realtime; Owner: -
--

CREATE UNIQUE INDEX subscription_subscription_id_entity_filters_key ON realtime.subscription USING btree (subscription_id, entity, filters);


--
-- Name: bname; Type: INDEX; Schema: storage; Owner: -
--

CREATE UNIQUE INDEX bname ON storage.buckets USING btree (name);


--
-- Name: bucketid_objname; Type: INDEX; Schema: storage; Owner: -
--

CREATE UNIQUE INDEX bucketid_objname ON storage.objects USING btree (bucket_id, name);


--
-- Name: buckets_analytics_unique_name_idx; Type: INDEX; Schema: storage; Owner: -
--

CREATE UNIQUE INDEX buckets_analytics_unique_name_idx ON storage.buckets_analytics USING btree (name) WHERE (deleted_at IS NULL);


--
-- Name: idx_multipart_uploads_list; Type: INDEX; Schema: storage; Owner: -
--

CREATE INDEX idx_multipart_uploads_list ON storage.s3_multipart_uploads USING btree (bucket_id, key, created_at);


--
-- Name: idx_name_bucket_level_unique; Type: INDEX; Schema: storage; Owner: -
--

CREATE UNIQUE INDEX idx_name_bucket_level_unique ON storage.objects USING btree (name COLLATE "C", bucket_id, level);


--
-- Name: idx_objects_bucket_id_name; Type: INDEX; Schema: storage; Owner: -
--

CREATE INDEX idx_objects_bucket_id_name ON storage.objects USING btree (bucket_id, name COLLATE "C");


--
-- Name: idx_objects_lower_name; Type: INDEX; Schema: storage; Owner: -
--

CREATE INDEX idx_objects_lower_name ON storage.objects USING btree ((path_tokens[level]), lower(name) text_pattern_ops, bucket_id, level);


--
-- Name: idx_prefixes_lower_name; Type: INDEX; Schema: storage; Owner: -
--

CREATE INDEX idx_prefixes_lower_name ON storage.prefixes USING btree (bucket_id, level, ((string_to_array(name, '/'::text))[level]), lower(name) text_pattern_ops);


--
-- Name: name_prefix_search; Type: INDEX; Schema: storage; Owner: -
--

CREATE INDEX name_prefix_search ON storage.objects USING btree (name text_pattern_ops);


--
-- Name: objects_bucket_id_level_idx; Type: INDEX; Schema: storage; Owner: -
--

CREATE UNIQUE INDEX objects_bucket_id_level_idx ON storage.objects USING btree (bucket_id, level, name COLLATE "C");


--
-- Name: vector_indexes_name_bucket_id_idx; Type: INDEX; Schema: storage; Owner: -
--

CREATE UNIQUE INDEX vector_indexes_name_bucket_id_idx ON storage.vector_indexes USING btree (name, bucket_id);


--
-- Name: subscription tr_check_filters; Type: TRIGGER; Schema: realtime; Owner: -
--

CREATE TRIGGER tr_check_filters BEFORE INSERT OR UPDATE ON realtime.subscription FOR EACH ROW EXECUTE FUNCTION realtime.subscription_check_filters();


--
-- Name: buckets enforce_bucket_name_length_trigger; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER enforce_bucket_name_length_trigger BEFORE INSERT OR UPDATE OF name ON storage.buckets FOR EACH ROW EXECUTE FUNCTION storage.enforce_bucket_name_length();


--
-- Name: objects objects_delete_delete_prefix; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER objects_delete_delete_prefix AFTER DELETE ON storage.objects FOR EACH ROW EXECUTE FUNCTION storage.delete_prefix_hierarchy_trigger();


--
-- Name: objects objects_insert_create_prefix; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER objects_insert_create_prefix BEFORE INSERT ON storage.objects FOR EACH ROW EXECUTE FUNCTION storage.objects_insert_prefix_trigger();


--
-- Name: objects objects_update_create_prefix; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER objects_update_create_prefix BEFORE UPDATE ON storage.objects FOR EACH ROW WHEN (((new.name <> old.name) OR (new.bucket_id <> old.bucket_id))) EXECUTE FUNCTION storage.objects_update_prefix_trigger();


--
-- Name: prefixes prefixes_create_hierarchy; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER prefixes_create_hierarchy BEFORE INSERT ON storage.prefixes FOR EACH ROW WHEN ((pg_trigger_depth() < 1)) EXECUTE FUNCTION storage.prefixes_insert_trigger();


--
-- Name: prefixes prefixes_delete_hierarchy; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER prefixes_delete_hierarchy AFTER DELETE ON storage.prefixes FOR EACH ROW EXECUTE FUNCTION storage.delete_prefix_hierarchy_trigger();


--
-- Name: objects update_objects_updated_at; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER update_objects_updated_at BEFORE UPDATE ON storage.objects FOR EACH ROW EXECUTE FUNCTION storage.update_updated_at_column();


--
-- Name: identities identities_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.identities
    ADD CONSTRAINT identities_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: mfa_amr_claims mfa_amr_claims_session_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_amr_claims
    ADD CONSTRAINT mfa_amr_claims_session_id_fkey FOREIGN KEY (session_id) REFERENCES auth.sessions(id) ON DELETE CASCADE;


--
-- Name: mfa_challenges mfa_challenges_auth_factor_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_challenges
    ADD CONSTRAINT mfa_challenges_auth_factor_id_fkey FOREIGN KEY (factor_id) REFERENCES auth.mfa_factors(id) ON DELETE CASCADE;


--
-- Name: mfa_factors mfa_factors_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_factors
    ADD CONSTRAINT mfa_factors_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: oauth_authorizations oauth_authorizations_client_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_authorizations
    ADD CONSTRAINT oauth_authorizations_client_id_fkey FOREIGN KEY (client_id) REFERENCES auth.oauth_clients(id) ON DELETE CASCADE;


--
-- Name: oauth_authorizations oauth_authorizations_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_authorizations
    ADD CONSTRAINT oauth_authorizations_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: oauth_consents oauth_consents_client_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_consents
    ADD CONSTRAINT oauth_consents_client_id_fkey FOREIGN KEY (client_id) REFERENCES auth.oauth_clients(id) ON DELETE CASCADE;


--
-- Name: oauth_consents oauth_consents_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_consents
    ADD CONSTRAINT oauth_consents_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: one_time_tokens one_time_tokens_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.one_time_tokens
    ADD CONSTRAINT one_time_tokens_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: refresh_tokens refresh_tokens_session_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.refresh_tokens
    ADD CONSTRAINT refresh_tokens_session_id_fkey FOREIGN KEY (session_id) REFERENCES auth.sessions(id) ON DELETE CASCADE;


--
-- Name: saml_providers saml_providers_sso_provider_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_providers
    ADD CONSTRAINT saml_providers_sso_provider_id_fkey FOREIGN KEY (sso_provider_id) REFERENCES auth.sso_providers(id) ON DELETE CASCADE;


--
-- Name: saml_relay_states saml_relay_states_flow_state_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_relay_states
    ADD CONSTRAINT saml_relay_states_flow_state_id_fkey FOREIGN KEY (flow_state_id) REFERENCES auth.flow_state(id) ON DELETE CASCADE;


--
-- Name: saml_relay_states saml_relay_states_sso_provider_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_relay_states
    ADD CONSTRAINT saml_relay_states_sso_provider_id_fkey FOREIGN KEY (sso_provider_id) REFERENCES auth.sso_providers(id) ON DELETE CASCADE;


--
-- Name: sessions sessions_oauth_client_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sessions
    ADD CONSTRAINT sessions_oauth_client_id_fkey FOREIGN KEY (oauth_client_id) REFERENCES auth.oauth_clients(id) ON DELETE CASCADE;


--
-- Name: sessions sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sessions
    ADD CONSTRAINT sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: sso_domains sso_domains_sso_provider_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sso_domains
    ADD CONSTRAINT sso_domains_sso_provider_id_fkey FOREIGN KEY (sso_provider_id) REFERENCES auth.sso_providers(id) ON DELETE CASCADE;


--
-- Name: _posts_v _posts_v_parent_id_posts_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._posts_v
    ADD CONSTRAINT _posts_v_parent_id_posts_id_fk FOREIGN KEY (parent_id) REFERENCES public.posts(id) ON DELETE SET NULL;


--
-- Name: _posts_v_rels _posts_v_rels_categories_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._posts_v_rels
    ADD CONSTRAINT _posts_v_rels_categories_fk FOREIGN KEY (categories_id) REFERENCES public.categories(id) ON DELETE CASCADE;


--
-- Name: _posts_v_rels _posts_v_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._posts_v_rels
    ADD CONSTRAINT _posts_v_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public._posts_v(id) ON DELETE CASCADE;


--
-- Name: _posts_v_rels _posts_v_rels_tags_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._posts_v_rels
    ADD CONSTRAINT _posts_v_rels_tags_fk FOREIGN KEY (tags_id) REFERENCES public.tags(id) ON DELETE CASCADE;


--
-- Name: _posts_v _posts_v_version_featured_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._posts_v
    ADD CONSTRAINT _posts_v_version_featured_image_id_media_id_fk FOREIGN KEY (version_featured_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: booths_faqs booths_faqs_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.booths_faqs
    ADD CONSTRAINT booths_faqs_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.booths(id) ON DELETE CASCADE;


--
-- Name: booths_features booths_features_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.booths_features
    ADD CONSTRAINT booths_features_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.booths(id) ON DELETE CASCADE;


--
-- Name: booths_gallery_images booths_gallery_images_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.booths_gallery_images
    ADD CONSTRAINT booths_gallery_images_image_id_media_id_fk FOREIGN KEY (image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: booths_gallery_images booths_gallery_images_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.booths_gallery_images
    ADD CONSTRAINT booths_gallery_images_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.booths(id) ON DELETE CASCADE;


--
-- Name: booths booths_thumbnail_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.booths
    ADD CONSTRAINT booths_thumbnail_image_id_media_id_fk FOREIGN KEY (thumbnail_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: concepts concepts_seo_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.concepts
    ADD CONSTRAINT concepts_seo_image_id_media_id_fk FOREIGN KEY (seo_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: gallery gallery_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gallery
    ADD CONSTRAINT gallery_image_id_media_id_fk FOREIGN KEY (image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_booths_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_booths_fk FOREIGN KEY (booths_id) REFERENCES public.booths(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_categories_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_categories_fk FOREIGN KEY (categories_id) REFERENCES public.categories(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_concepts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_concepts_fk FOREIGN KEY (concepts_id) REFERENCES public.concepts(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_gallery_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_gallery_fk FOREIGN KEY (gallery_id) REFERENCES public.gallery(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_leads_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_leads_fk FOREIGN KEY (leads_id) REFERENCES public.leads(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_media_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_media_fk FOREIGN KEY (media_id) REFERENCES public.media(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.payload_locked_documents(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_posts_fk FOREIGN KEY (posts_id) REFERENCES public.posts(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_tags_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_tags_fk FOREIGN KEY (tags_id) REFERENCES public.tags(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_users_fk FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: payload_preferences_rels payload_preferences_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_preferences_rels
    ADD CONSTRAINT payload_preferences_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.payload_preferences(id) ON DELETE CASCADE;


--
-- Name: payload_preferences_rels payload_preferences_rels_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payload_preferences_rels
    ADD CONSTRAINT payload_preferences_rels_users_fk FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: posts posts_featured_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_featured_image_id_media_id_fk FOREIGN KEY (featured_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: posts_rels posts_rels_categories_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts_rels
    ADD CONSTRAINT posts_rels_categories_fk FOREIGN KEY (categories_id) REFERENCES public.categories(id) ON DELETE CASCADE;


--
-- Name: posts_rels posts_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts_rels
    ADD CONSTRAINT posts_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.posts(id) ON DELETE CASCADE;


--
-- Name: posts_rels posts_rels_tags_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts_rels
    ADD CONSTRAINT posts_rels_tags_fk FOREIGN KEY (tags_id) REFERENCES public.tags(id) ON DELETE CASCADE;


--
-- Name: users_sessions users_sessions_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_sessions
    ADD CONSTRAINT users_sessions_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: objects objects_bucketId_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.objects
    ADD CONSTRAINT "objects_bucketId_fkey" FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id);


--
-- Name: prefixes prefixes_bucketId_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.prefixes
    ADD CONSTRAINT "prefixes_bucketId_fkey" FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id);


--
-- Name: s3_multipart_uploads s3_multipart_uploads_bucket_id_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.s3_multipart_uploads
    ADD CONSTRAINT s3_multipart_uploads_bucket_id_fkey FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id);


--
-- Name: s3_multipart_uploads_parts s3_multipart_uploads_parts_bucket_id_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.s3_multipart_uploads_parts
    ADD CONSTRAINT s3_multipart_uploads_parts_bucket_id_fkey FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id);


--
-- Name: s3_multipart_uploads_parts s3_multipart_uploads_parts_upload_id_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.s3_multipart_uploads_parts
    ADD CONSTRAINT s3_multipart_uploads_parts_upload_id_fkey FOREIGN KEY (upload_id) REFERENCES storage.s3_multipart_uploads(id) ON DELETE CASCADE;


--
-- Name: vector_indexes vector_indexes_bucket_id_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.vector_indexes
    ADD CONSTRAINT vector_indexes_bucket_id_fkey FOREIGN KEY (bucket_id) REFERENCES storage.buckets_vectors(id);


--
-- Name: audit_log_entries; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.audit_log_entries ENABLE ROW LEVEL SECURITY;

--
-- Name: flow_state; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.flow_state ENABLE ROW LEVEL SECURITY;

--
-- Name: identities; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.identities ENABLE ROW LEVEL SECURITY;

--
-- Name: instances; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.instances ENABLE ROW LEVEL SECURITY;

--
-- Name: mfa_amr_claims; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.mfa_amr_claims ENABLE ROW LEVEL SECURITY;

--
-- Name: mfa_challenges; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.mfa_challenges ENABLE ROW LEVEL SECURITY;

--
-- Name: mfa_factors; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.mfa_factors ENABLE ROW LEVEL SECURITY;

--
-- Name: one_time_tokens; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.one_time_tokens ENABLE ROW LEVEL SECURITY;

--
-- Name: refresh_tokens; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.refresh_tokens ENABLE ROW LEVEL SECURITY;

--
-- Name: saml_providers; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.saml_providers ENABLE ROW LEVEL SECURITY;

--
-- Name: saml_relay_states; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.saml_relay_states ENABLE ROW LEVEL SECURITY;

--
-- Name: schema_migrations; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.schema_migrations ENABLE ROW LEVEL SECURITY;

--
-- Name: sessions; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.sessions ENABLE ROW LEVEL SECURITY;

--
-- Name: sso_domains; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.sso_domains ENABLE ROW LEVEL SECURITY;

--
-- Name: sso_providers; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.sso_providers ENABLE ROW LEVEL SECURITY;

--
-- Name: users; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

--
-- Name: messages; Type: ROW SECURITY; Schema: realtime; Owner: -
--

ALTER TABLE realtime.messages ENABLE ROW LEVEL SECURITY;

--
-- Name: buckets; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.buckets ENABLE ROW LEVEL SECURITY;

--
-- Name: buckets_analytics; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.buckets_analytics ENABLE ROW LEVEL SECURITY;

--
-- Name: buckets_vectors; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.buckets_vectors ENABLE ROW LEVEL SECURITY;

--
-- Name: migrations; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.migrations ENABLE ROW LEVEL SECURITY;

--
-- Name: objects; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

--
-- Name: prefixes; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.prefixes ENABLE ROW LEVEL SECURITY;

--
-- Name: s3_multipart_uploads; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.s3_multipart_uploads ENABLE ROW LEVEL SECURITY;

--
-- Name: s3_multipart_uploads_parts; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.s3_multipart_uploads_parts ENABLE ROW LEVEL SECURITY;

--
-- Name: vector_indexes; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.vector_indexes ENABLE ROW LEVEL SECURITY;

--
-- Name: supabase_realtime; Type: PUBLICATION; Schema: -; Owner: -
--

CREATE PUBLICATION supabase_realtime WITH (publish = 'insert, update, delete, truncate');


--
-- Name: issue_graphql_placeholder; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER issue_graphql_placeholder ON sql_drop
         WHEN TAG IN ('DROP EXTENSION')
   EXECUTE FUNCTION extensions.set_graphql_placeholder();


--
-- Name: issue_pg_cron_access; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER issue_pg_cron_access ON ddl_command_end
         WHEN TAG IN ('CREATE EXTENSION')
   EXECUTE FUNCTION extensions.grant_pg_cron_access();


--
-- Name: issue_pg_graphql_access; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER issue_pg_graphql_access ON ddl_command_end
         WHEN TAG IN ('CREATE FUNCTION')
   EXECUTE FUNCTION extensions.grant_pg_graphql_access();


--
-- Name: issue_pg_net_access; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER issue_pg_net_access ON ddl_command_end
         WHEN TAG IN ('CREATE EXTENSION')
   EXECUTE FUNCTION extensions.grant_pg_net_access();


--
-- Name: pgrst_ddl_watch; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER pgrst_ddl_watch ON ddl_command_end
   EXECUTE FUNCTION extensions.pgrst_ddl_watch();


--
-- Name: pgrst_drop_watch; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER pgrst_drop_watch ON sql_drop
   EXECUTE FUNCTION extensions.pgrst_drop_watch();


--
-- PostgreSQL database dump complete
--

\unrestrict o5h9fgVACKDuLt0UPfHxyT3vkKIym0e8nN3UzENXMA3VAC3TAY5IwVjm2gxqB3t

